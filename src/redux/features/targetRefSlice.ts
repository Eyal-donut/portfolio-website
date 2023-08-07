import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface targetRef {
  targetRef: HTMLDivElement | null;
}
const initialState: targetRef = {
  targetRef: null,
};

const targetRefSlice = createSlice({
  name: "targetRef",
  initialState,
  reducers: {
    setTargetRef: (state, action: PayloadAction<HTMLDivElement>) => {
      return {
        ...state,
        targetRef: action.payload,
      };
    },
  },
});

export const { setTargetRef } = targetRefSlice.actions;

export default targetRefSlice.reducer;
