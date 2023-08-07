// // sectionsRefsSlice.ts
// import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
// import { RefObject } from "react";

// interface SectionRefsState {
//   sections: Record<string, RefObject<HTMLDivElement> | null>;
// }

// const initialState: SectionRefsState = {
//   sections: {},
// };

// const sectionRefsSlice = createSlice({
//   name: "sectionRefs",
//   initialState,
//   reducers: {
//     setRef: (
//       state,
//       action: PayloadAction<{
//         section: string;
//         ref: Draft<RefObject<HTMLDivElement>>;
//       }>
//     ) => {
//       const { section, ref } = action.payload;
//       state.sections[section] = ref;
//     },
//   },
// });

// export const { setRef } = sectionRefsSlice.actions;

// export default sectionRefsSlice.reducer;
