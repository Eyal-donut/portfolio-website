import { createSlice } from "@reduxjs/toolkit";
import { RefObject, useRef } from "react";

const homeRef = useRef(null);
const aboutRef = useRef(null);
const projectsRef = useRef(null);
const contactRef = useRef(null);

interface sectionRefs {
  home: RefObject<HTMLDivElement> | null;
  about: RefObject<HTMLDivElement> | null;
  projects: RefObject<HTMLDivElement> | null;
  contact: RefObject<HTMLDivElement> | null;
}

const initialState: sectionRefs = {
  home: homeRef,
  about: aboutRef,
  projects: projectsRef,
  contact: contactRef,
};

const sectionRefsSlice = createSlice({
  name: "sectionRefs",
  initialState,
  reducers: {},
});

export default sectionRefsSlice.reducer;
