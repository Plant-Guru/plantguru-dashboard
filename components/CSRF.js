import { useEffect, useState } from 'react';
import axios from '../helpers/axios';

export function CSRF() {
    console.log("start")
    const [token, setToken] = useState(null);
    useEffect(async () => {
        console.log("hier");
        const csrf_token = await axios.post('csrf');
        setToken(csrf_token);
    }, []);
    return token ? <div id="csrf_token">{token}</div> : null;
}