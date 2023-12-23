import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:3333/",
});


export interface ResponseAPI {
  ok?: boolean;
  code?: number;
  message?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

export default apiService;


// apiService.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   config.headers.Authorization = token ? token : "";
//   return config;
// });