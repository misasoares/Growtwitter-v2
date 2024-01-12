import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTweets } from "../../../config/services/tweets.service";

interface TweetsDto {
  id: string;
  content: string;
}

interface TweetsSliceType {
  tweets: TweetsDto[];
  loading: boolean;
  status: {
    code: number;
    message: string;
  } | null;
}

const initialState: TweetsSliceType = {
  tweets: [],
  loading: false,
  status: null,
};

export const getTweetThunk = createAsyncThunk("tweets/getTweets", async () => {
  try {
    const response = await getAllTweets();
    console.log(response);
  } catch (error) {
    console.log("erro ao pegar tweets", error);

    return {
      ...initialState,
      status: { code: 404, message: `${error}` },
    };
  }
});

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    clear() {
      return initialState;
    },
    updateArrayTweets(state, action: PayloadAction<TweetsSliceType>) {
      state = action.payload;
      return state;
    },
  },
});

export const { clear, updateArrayTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
