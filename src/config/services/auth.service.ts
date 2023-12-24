
import apiService from "./api.service";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LoginDTO {
  username: string;
  password: string;
}

export async function login(data: LoginDTO) {
  try {
    const response = await apiService.post("auth/login", data);
    return {
      message: response.data.user.message,
      code: response.data.user.code,
      data: response.data,
    };
  } catch (error: any) {
    return {
      message: error.response.data?.message,
      code: error.response.data?.code,
      data: error.response.data?.data,
    };
  }
}
