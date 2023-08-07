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
//     setRef: (
//       state,
//       action: PayloadAction<{
//         refType: keyof sectionRefs;
//         ref: Draft<RefObject<HTMLDivElement>>;
//       }>
//     ) => {
//       const { refType, ref } = action.payload;
//       if (ref.current instanceof HTMLDivElement) {
//         state[refType] = ref;
//       } else {
//         throw new Error(`Invalid ref type for ${refType}`);
//       }
//     },
//   },
// });
// export const { setRef } = sectionRefsSlice.actions;

// export default sectionRefsSlice.reducer;
