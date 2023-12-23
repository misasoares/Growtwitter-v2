import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginDTO, login } from "../../../config/services/auth.service";

export interface UserType {
  id: string;
  username: string;
  name: string;
  email: string;
  token: string;
  iconePerfil: string;
}

const initialState = {
  id: "",
  username: "",
  name: "",
  email: "",
  token: "",
  iconePerfil: "",
};

export const loginThunk = createAsyncThunk("user/login", async (dataLogin: LoginDTO) => {
  try {
    const response = await login(dataLogin);
    const { data } = response.data.user;
    const token = response.data.token;

    const userLogado = {
      id: data.id,
      name: data.name,
      email: data.email,
      username: data.username,
      token: token,
      iconePerfil: data.iconePerfil,
    };

    return userLogado;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return null;
  }
});

const userSlice = createSlice({
  name: "userLogged",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        return state;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state = action.payload;
        }
        return state;
      });
  },
});

export default userSlice.reducer;
