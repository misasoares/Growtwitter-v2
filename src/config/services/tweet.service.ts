import apiService from "./api.service";

export interface TweetsDTO {
  id: string;
  content: string;
  type: string;
  User: any;
  Likes: any[];
  originalTweet: any;
  retweets: any;
}

export async function getTweets() {
  try {
    const response = await apiService.get("/tweets");

    console.log(response, "tweets--");
  } catch (error: any) {
    return {
      ok: error.response.data?.ok,
      message: error.response.data?.message,
      code: error.response.data?.code,
      data: error.response.data?.data,
    };
  }
}
