import axios from "axios";


const http = axios.create({
    baseURL: `https://gotiny.cc/api`
});

export default http;
