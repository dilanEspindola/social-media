import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "@/utils";

export interface InitialState {
  username?: string;
}

export const initialState: InitialState = {
  username: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUsername: (state) => {
      const usernameLocalStorage = getProfile()?.username;
      state.username = usernameLocalStorage;
    },
  },
});

export const { setUsername } = profileSlice.actions;

export default profileSlice.reducer;
