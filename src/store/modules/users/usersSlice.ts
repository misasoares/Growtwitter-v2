import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UsersType {
  id?: string;
  nome: string;
  email: string;
  password: string;
  idade: number;
  tipo: string;
}


const initialState: UsersType[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createNewUser(state, action: PayloadAction<UsersType[]>) {
      state = action.payload;
      return state;
    },
  },
});

export const { createNewUser } = usersSlice.actions;
export default usersSlice.reducer;
