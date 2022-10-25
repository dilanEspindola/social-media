import { configureStore } from "@reduxjs/toolkit";
import profileReducer, { InitialState } from "./slices/profileSlice";

interface AppState {
  profile: InitialState;
}

export const store = configureStore<AppState>({
  reducer: {
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
