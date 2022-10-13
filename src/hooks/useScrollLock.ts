import { useEffect } from "react";

const useScrollLock = (lock: boolean) => {
  useEffect(() => {
    if (!lock) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, [lock]);
};

export default useScrollLock;
