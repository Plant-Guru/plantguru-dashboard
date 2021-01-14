import axios from 'axios';

const customInstance = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API_HOST,
    // withCredentials: true, @todo
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHTTPRequest'
    },
    withCredentials: true
});

customInstance.interceptors.request.use(req => {
    const csrf_container = document.getElementById('csrf_token');
    console.log(csrf_container);
    if(csrf_container) {
        const csrf_token = csrf_container.innerHTML;
        console.log(csrf_token);
        console.log(csrf_token && csrf_token !== '');
        if(csrf_token && csrf_token !== '') {
            req.headers['x-csrf-token'] = csrf_token;
        }
    }
    return req;
});
  

export default customInstance;