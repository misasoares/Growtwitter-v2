import apiService from "./api.service";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getAllTweets() {
  try {
    const response = await apiService.get("tweets");
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
