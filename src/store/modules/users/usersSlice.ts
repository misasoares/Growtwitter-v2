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

export const getUsers = createAsyncThunk("users/getUsers", async () => {
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
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state = action.payload;
        }
      });
  },
});

export const { updateArrayUsers } = usersSlice.actions;
export default usersSlice.reducer;
