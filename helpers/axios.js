import axios from 'axios';

const customInstance = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API_HOST,
    // withCredentials: true, @todo
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHTTPRequest'
    }
});

export default customInstance;