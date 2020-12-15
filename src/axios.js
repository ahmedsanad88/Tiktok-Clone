import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-mern-backend-server.herokuapp.com",
});

export default instance;