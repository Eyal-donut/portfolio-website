import { configureStore } from "@reduxjs/toolkit";
import menuDisplayReducer from "./features/menuDisplaySlice";


export const store = configureStore({
  reducer: {
    menuDisplay: menuDisplayReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
