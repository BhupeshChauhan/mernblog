/* eslint-disable max-len */
import axios from 'axios';

export const api = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_APIURL,
});

// defining a custom error handler for all APIs
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const errorHandler = (error: any) => {
  const statusCode = error.response?.status;

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});

axios.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const userData: any = localStorage.getItem('userData')
      const token = (localStorage.getItem('userData') ? JSON.parse(userData).token : null) as string;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);
