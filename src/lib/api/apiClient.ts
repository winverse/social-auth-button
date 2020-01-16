import axios, { AxiosInstance } from 'axios';

const baseURL = (() => 'http://localhost:5000')();

const apiClient: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL,
});

apiClient.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    console.log('errrr', err);
    return Promise.reject(err.response);
  },
);

export default apiClient;
