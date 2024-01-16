import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createUser, createUserDTO, getAllUsers } from "../../../config/services/user.service";

export interface UsersType {
  id: string;
  name: string;
  email: string;
  username: string;
  iconePerfil: string;
}

interface UsersState {
  data: UsersType[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
};

export const getUsersThunk = createAsyncThunk("users/getUsersThunk", async () => {
  try {
    const response = await getAllUsers();

    const { data } = response;

    return { data, loading: false, error: null };
  } catch (error) {
    console.error("Erro ao criar usuários:", error);
    throw error;
  }
});

export const createNewUser = createAsyncThunk("users/createNewUser", async (dataUser: createUserDTO) => {
  try {
    const response = await createUser(dataUser);

    const { data } = response;

    return {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      username: data.username,
      iconePerfil: data.iconePerfil,
    };
  } catch (error) {
    console.error("Erro ao criar usuários:", error);
    throw error;
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateArrayUsers(state, action: PayloadAction<UsersState>) {
      state = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.error = action.payload.error;
      });
  },
});

export const { updateArrayUsers } = usersSlice.actions;
export default usersSlice.reducer;
