import { combineReducers } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";
import userSlice from "./user/userSlice";
import tweetsSlice from "./tweets/tweetsSlice";

export default combineReducers({
  users: usersSlice,
  user: userSlice,
  tweets: tweetsSlice,
});
