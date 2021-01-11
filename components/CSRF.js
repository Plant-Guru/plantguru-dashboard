import { useEffect, useState } from 'react';
import axios from '../helpers/axios';

export function CSRF() {
    const [token, setToken] = useState(null);
    useEffect(async () => {
        const csrf_token = await axios.get('csrf');
        if(csrf_token.data && csrf_token.data.csrf_token)
        setToken(csrf_token.data.csrf_token);
    }, []);
    return token ? <div id="csrf_token">{token}</div> : null;
}