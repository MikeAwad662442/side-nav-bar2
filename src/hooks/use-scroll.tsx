import { useCallback, useEffect, useState } from "react";

const UseScroll = (threshold: number) => {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // also check on first load
  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
};

export default UseScroll;
/******************
 * Use this Hook
 *
 * To add Scroll effect to Navbar or Page
 *
 ******************/
