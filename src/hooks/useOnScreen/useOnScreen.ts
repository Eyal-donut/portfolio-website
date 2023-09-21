import { useMemo, RefObject, useState, useEffect } from "react";

const useOnScreen = (ref: RefObject<HTMLElement>) => {
  const [isInMiddle, setIsInMiddle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const observerCenter = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIsInMiddle(entry.isIntersecting);
        },
        {
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0,
        }
      ),
    [ref]
  );

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      observerCenter.observe(ref.current);
      return () => observerCenter.disconnect();
    }
  }, []);
  const observerBottom = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          rootMargin: "-50% 0px -10% 0px",
          threshold: 0,
        }
      ),
    [ref]
  );

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      observerBottom.observe(ref.current);
      return () => observerBottom.disconnect();
    }
  }, []);

  return { isInMiddle, isVisible };
};

export default useOnScreen;
