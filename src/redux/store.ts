import { configureStore } from "@reduxjs/toolkit";
import targetSectionReducer from "./features/targetRefSlice";

export const store = configureStore({
  reducer: {
    targetSection: targetSectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
