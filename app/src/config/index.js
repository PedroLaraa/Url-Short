import axios from "axios";


const http = axios.create({
    baseURL: `https://cleanuri.com/api/v1/shorten`
});

export default http;
