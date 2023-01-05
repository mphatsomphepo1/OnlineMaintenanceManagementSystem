import axios from "axios";

export const BASE_URL = "https://campus-maintenance-system.herokuapp.com"

export const myAxios = axios.create({
    baseURL: BASE_URL,
});