import axios from "axios";

const url = 'http://localhost:3023/';

const instance = axios.create({
    baseURL: url,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default instance;