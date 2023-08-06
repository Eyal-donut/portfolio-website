import { RefObject } from "react";

const scrollToSection = (targetRef: RefObject<HTMLDivElement>) => {
  if (targetRef.current) {
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default scrollToSection;
