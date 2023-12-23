import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createUser, createUserDTO, getAllUsers } from "../../../config/services/user.service";

export interface UsersType {
  id: string;
  name: string;
  email: string;
  password: string;
  username: string;
  iconePerfil: string;
}

const initialState: UsersType[] = [];

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await getAllUsers();

    const { data } = response;

    return data;
  } catch (error) {
    console.error("Erro ao criar usuários:", error);
    return null;
  }
});

export const createNewUser = createAsyncThunk("users/createNewUser", async (dataUser: createUserDTO) => {
  try {
    const response = await createUser(dataUser);

    const { data } = response;
    console.log(data);

    // return {
    //   id: data.id,
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    //   username: data.username,
    //   iconePerfil: data.iconePerfil,
    // };
  } catch (error) {
    console.error("Erro ao criar usuários:", error);
    return null;
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateArrayUsers(state, action: PayloadAction<UsersType[]>) {
      state = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        return state;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        if (action.payload) {
          state = action.payload;
        }
        return state;
      });
  },
});

export const { updateArrayUsers } = usersSlice.actions;
export default usersSlice.reducer;
