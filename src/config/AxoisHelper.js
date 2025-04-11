import axios from 'axios';

export const baseURL = process.env.NODE_ENV === 'production'
  ? "" // Let Netlify proxy it!
  : "http://13.51.146.169:8080"; // Local dev direct API

export const httpClient = axios.create({
  baseURL: baseURL
});
