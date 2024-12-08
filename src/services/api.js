// 13a62ab79ae4d6a0bf21499c380f7e61560747e5

import axios from 'axios';

export const key = "13a62ab79ae4d6a0bf21499c380f7e61560747e5";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api;
