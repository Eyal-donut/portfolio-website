import classes from "./ScrollTrigger.module.css";
import { FC, ReactNode, useRef, useState } from "react";
import useOnScreen from "../../../hooks/useOnScreen/useOnScreen";

interface ScrollTriggerProps {
  children: ReactNode;
  isReversibleEffect: boolean;
}

const ScrollTrigger: FC<ScrollTriggerProps> = ({
  children,
  isReversibleEffect,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const [hasTriggered, setHasTriggered] = useState(false);
  if (isVisible && !hasTriggered && !isReversibleEffect) {
    setHasTriggered(true);
  }

  return (
    <div
      className={
        isReversibleEffect
          ? isVisible
            ? `${classes.slideUpContainer} ${classes.slideUpActive}`
            : classes.slideUpContainer
          : hasTriggered
          ? `${classes.slideUpContainer} ${classes.slideUpActive}`
          : classes.slideUpContainer
      }
      ref={ref}
    >
      {children}
    </div>
  );
};

export default ScrollTrigger;
