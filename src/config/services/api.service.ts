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

apiService.interceptors.request.use((config) => {
  const userToken = localStorage.getItem("token");
  const token = `Bearer ${userToken}`;
  config.headers.authorization = token ? token : "";
  return config;
});
export default apiService;
