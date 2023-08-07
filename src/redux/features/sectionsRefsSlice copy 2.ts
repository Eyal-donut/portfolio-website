// import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";
// import { RefObject } from "react";

// interface sectionRefs {
//   homeRef: RefObject<HTMLDivElement> | null;
//   aboutRef: RefObject<HTMLDivElement> | null;
//   projectsRef: RefObject<HTMLDivElement> | null;
//   contactRef: RefObject<HTMLDivElement> | null;
// }

// const initialState: sectionRefs = {
//   homeRef: null,
//   aboutRef: null,
//   projectsRef: null,
//   contactRef: null,
// };

// const sectionRefsSlice = createSlice({
//   name: "sectionRefs",
//   initialState,
//   reducers: {
//     setHomeRef: (
//       state,
//       action: PayloadAction<Draft<RefObject<HTMLDivElement>>>
//     ) => {
//       // if (action.payload.current instanceof HTMLDivElement) {
//         state.homeRef = action.payload;
//       // } else {
//         // console.log(action.payload.current)
//         // console.log(typeof action.payload.current)
//         // throw new Error(`Invalid ref type for homeRef`);
//       // }
//     },
//   },
// });
// export const { setHomeRef } = sectionRefsSlice.actions;

// export default sectionRefsSlice.reducer;
