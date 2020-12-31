import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const dev = process.env.NODE_ENV === 'development';
const api_url = dev ? 'http://localhost:4000/api/v1/session' : 'https://api.plant-guru.com/api/v1/session';

const providers = [
    Providers.Credentials({
        name: 'Credentials',
        credentials: {
            email: { label: "Email", type: "text" },
            password: {  label: "Password", type: "password" }
        },
        authorize: async (credentials) => {
            console.log("credentials: ", credentials);
            try {
                const data = {
                    user: {
                        email: credentials.email,
                        password: credentials.password
                    }
                };
                // API call associated with authentification
                    // look up the user from the credentials supplied
                const user = await login(data);
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return Promise.resolve(user);
                }
            } catch (error) {
                if (error.response) {
                    console.log(error.response);
                    Promise.reject(new Error('Invalid Email and Password combination'));
                }
            }
        },
    }),
];

const login = async data => {
    var config = {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        }
    };
    const result = await axios.post(api_url, data, config);
    console.log('result', result);
    return result;
};

const isTokenStale = (token) => {
    const decodedToken = token && jwt_decode(token);
    console.log("decodedToken", decodedToken);
    const currentTime = new Date().getTime() / 1000;
    return currentTime >= decodedToken?.exp;
};
  
const refreshAuthToken = async (refreshToken) => {
    const refreshTokenUrl = api_url + '/renew';

    const responseData = await axios.post(refreshTokenUrl, {}, {
        headers: {
            'Authorization': `${refreshToken}` 
        }
    }).then((response) => response);
    console.log("responseData", responseData);
    if (responseData.data.data.access_token) {
        return {
            accessToken  : responseData.data.data.access_token,
            refreshToken : responseData.data.data.renewal_token
        };
    }
    return { accessToken: null, refreshToken: null };
};
  
const getTokens = async (accessToken, refreshToken) => {
    if (!isTokenStale(accessToken)) {
        return { accessToken, refreshToken };
    }
    return await refreshAuthToken(refreshToken);
};

const callbacks = {}

callbacks.jwt = async function jwt(token, user, account, profile) {
    console.log("profile", profile);
    console.log("user", user);
    console.log("token", token);
    console.log("account", account);
    if (profile) {
        return Promise.resolve({ ...token, accessToken: profile.data.data.access_token, refreshToken: profile.data.data.renewal_token });
    }
console.log("token2", token);
    const { accessToken, refreshToken } = token;
    if (accessToken && refreshToken) {
        const newToken = await getTokens(accessToken, refreshToken);
        if (newToken.accessToken) {
            return Promise.resolve({ ...token, accessToken: newToken.access_token, refreshToken: newToken.renewal_token });
        }
    }

    return Promise.resolve(token);
}

callbacks.session = async function session(session, token) {
    session.accessToken = token.accessToken;
    session.renewToken = token.renewToken;
    return Promise.resolve(session);
}

const options = {
    providers,
    callbacks,
    debug: dev
}

export default (req, res) => NextAuth(req, res, options)