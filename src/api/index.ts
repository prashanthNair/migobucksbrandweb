import axios from 'axios';

const { location } = window;
const { protocol, hostname, port } = location;
const SERVER_PORT = 8000;

const apiUrl = `${protocol}//${hostname}:${port === '3000' ? SERVER_PORT : port}/api/v1`;

const authApiUrl = `${apiUrl}/auth`;
const brandApiUrl = `${apiUrl}/brand`;


export const authApi = axios.create({
    baseURL: authApiUrl,
    responseType: 'json'
});

export const brandApi = axios.create({
    baseURL: brandApiUrl,
    responseType: 'json'
});