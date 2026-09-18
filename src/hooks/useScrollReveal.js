import { useEffect, useRef, useState } from "react";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (options.once !== false) observer.disconnect();
        }
      },
      { threshold: options.threshold ?? 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options.once, options.threshold]);

  return { ref, className: `reveal ${visible ? "is-visible" : ""}` };
}