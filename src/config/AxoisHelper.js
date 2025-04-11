import axios from 'axios';
export const baseURL = "http://13.51.146.169:8080"
export const httpClient = axios.create({
    baseURL:baseURL ,
    
    
})
