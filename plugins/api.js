import axios from 'axios';


export const api = axios.create({
    baseURL : 'https://sanae-backend-production.up.railway.app/api/',
    timeout: 500000
});