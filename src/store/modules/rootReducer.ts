import { combineReducers } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";

export default combineReducers({
  users: usersSlice
});
