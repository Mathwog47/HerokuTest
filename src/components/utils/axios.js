import axios from 'axios'
import { Toast } from './Toast'

const axiosInstance = axios.create({
    baseURL: 'http://hire.zynerd.co.in',
    maxBodyLength: Infinity,
  });
  
  axiosInstance.interceptors.response.use(
      function (response) {
          return response;
      },
      function (error) {
          if (error.response) {
              const status = error.response.status;
              const url = error.response.config.url;
              if (status >= 400 && status < 500 && url.includes('hire.zynerd.co.in')) {
                  Toast({
                      message: 'Api Failed',
                      type: 'error',
                  });
                  // Redirecting after showing the toast
                  // setTimeout(() => {
                  //     window.location.href = '/login';
                  // }, 3000);
              }
          } else if (error.request) {
              console.log(error.request);
          } else {
              console.log('Error', error.message);
          }
          return Promise.reject(error);
      }
  );

export default axiosInstance
