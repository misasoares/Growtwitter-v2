/* eslint-disable @typescript-eslint/no-explicit-any */
import apiService from "./api.service";

export interface createUserDTO {
  name: string;
  username: string;
  email: string;
  password: string;
}

export async function getAllUsers() {
  try {
    const response = await apiService.get(`/users`);

    return {
      message: response.data.message,
      code: response.data.code,
      data: response.data.data,
    };
  } catch (error: any) {
    return {
      ok: error.response.data?.ok,
      message: error.response.data?.message,
      code: error.response.data?.code,
      data: error.response.data?.data,
    };
  }
}

export async function createUser(data: createUserDTO) {
  try {
    const response = await apiService.post("users/", data);

    return {
      message: response.data.message,
      code: response.data.code,
      data: response.data.data,
    };
  } catch (error: any) {
    return {
      ok: error.response.data?.ok,
      message: error.response.data?.message,
      code: error.response.data?.code,
      data: error.response.data?.data,
    };
  }
}
