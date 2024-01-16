import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTweets } from "../../../config/services/tweets.service";
import { UserType } from "../user/userSlice";

export interface TweetsDto {
  id: string;
  content: string;
  type: string;
  User: UserType;
  Likes: any[];
  originalTweet: TweetsDto;
  retweets: TweetsDto[];
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
    const { data, code, message } = response;

    return {
      tweets: data,
      loading: false,
      status: { code, message },
    };
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
  extraReducers: (builder) => {
    builder
      .addCase(getTweetThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTweetThunk.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      });
  },
});

export const { clear, updateArrayTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
