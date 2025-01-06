import { useEffect, useState, RefObject } from "react";

interface UseIntersectionObserverProps {
  ref: RefObject<Element>;
  options?: IntersectionObserverInit;
}

export function useIntersectionObserver({
  ref,
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  },
}: UseIntersectionObserverProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
} 