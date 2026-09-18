import { useEffect, useState } from "react";

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.15, 0.4, 0.7] }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}