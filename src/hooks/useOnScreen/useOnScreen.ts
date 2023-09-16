import { useMemo, RefObject, useState, useEffect } from "react";

const useOnScreen = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, []);

  return isIntersecting;
};

export default useOnScreen;
