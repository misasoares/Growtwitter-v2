import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginDTO, login } from "../../../config/services/auth.service";

export interface UserType {
  id: string;
  username: string;
  name: string;
  email: string;
  token: string;
  iconePerfil: string;
  loading: boolean;
}

const initialState = {
  id: "",
  username: "",
  name: "",
  email: "",
  token: "",
  iconePerfil: "",
  loading: false,
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
      loading: false,
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
  reducers: {
    logout(state) {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        if (action.payload) {
          Object.assign(state, action.payload); // Atualizando os campos do usuário no estado
        }
        state.loading = false;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.loading = false;
        console.log("Aconteceu algum erro");
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
