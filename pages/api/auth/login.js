import axios from 'axios';

const dev = process.env.NODE_ENV === 'development';
const api_url = dev ? 'http://localhost:4000/api/v1/session' : 'https://api.plant-guru.com/api/v1/session';

const login = async data => {
    var config = {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        }
    };
    const result = await axios.post(api_url, data, config);
    return result;
};

const isTokenStale = (exp) => {
    const currentTime = new Date().getTime() / 1000;
    return currentTime >= exp;
};
  
const refreshAuthToken = async (refreshToken) => {
    const refreshTokenUrl = api_url + '/renew';

    const responseData = await axios.post(refreshTokenUrl, {}, {
        headers: {
            'Authorization': `${refreshToken}` 
        }
    }).then((response) => response);
    if (responseData.data.data.access_token) {
        return {
            accessToken  : responseData.data.data.access_token,
            refreshToken : responseData.data.data.renewal_token,
            iat: responseData.data.data.iat,
            exp: responseData.data.data.exp
        };
    }
    return { accessToken: null, refreshToken: null };
};
  
const getTokens = async (accessToken, refreshToken, exp, iat) => {
    if (!isTokenStale(exp)) {
        return { accessToken, refreshToken, exp, iat };
    }
    return await refreshAuthToken(refreshToken);
};

export default function handler(req, res) {
    const { method, body } = req
    if (method === 'POST') {
        const data = {
            user: {
                email: body.email,
                password: body.password
            }
        };
        const tokens = await login(data);
        console.log("tokens", tokens);
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        cookies.set('access_token', tokens.access_token, {
            expires: new Date(Date.now() + 1800000),
            httpOnly: true,
            secure: !dev
        });
        cookies.set('refresh_token', tokens.access_token, {
            expires: new Date(Date.now() + 1800000),
            httpOnly: true,
            secure: !dev
        });
        res.end(JSON.stringify({ tokens }));
    } else {
        console.log(method + ' request to login endpoint');
    }
}