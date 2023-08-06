import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RefObject, useRef } from "react";
//Create a slice here with all the refs. Use the refs in the different sections with useSelector.
//setTargetSection takes then a string and the state of targetState is a string. By the string that the function gets, it activates scrollToSection
//optional: take this logic out to a hook that gets a string, sets the state, and activate the scrolling function

const homeRef = useRef(null);
const aboutRef = useRef(null);
const projectsRef = useRef(null);
const contactRef = useRef(null);

interface refsState {
  home: RefObject<HTMLElement> | null;
  about: RefObject<HTMLElement> | null;
  projects: RefObject<HTMLElement> | null;
  contact: RefObject<HTMLElement> | null;
}
const initialRefsState: refsState = {
  home: null,
  about: null,
  projects: null,
  contact: null,
};

interface sectionsState {
  section: "home" | "about" | "projects" | "contact";
}

const initialSectionState: sectionsState = {
  section: "home",
};

const targetRefSlice = createSlice({
  name: "targetRef",
  initialState,
  reducers: {
    setTargetRef: (state, action: PayloadAction<RefObject<HTMLElement>>) => {
      state.targetRef = action.payload;
    },
  },
});

export const { setTargetRef } = targetRefSlice.actions;

export default targetRefSlice.reducer;
