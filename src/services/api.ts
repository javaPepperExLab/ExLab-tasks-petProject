import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { REQUEST_TIME, SERVER_URL } from '../const';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: SERVER_URL,
    timeout: REQUEST_TIME
  });
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if(config.headers) {
        config.headers['Auth'] = 'AuthExample';
      }
      return config;
    }
  );
  return api;
};
