import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    if (!id) return;

    const scrollToTarget = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    scrollToTarget();
    const timeout = window.setTimeout(scrollToTarget, 100);

    return () => window.clearTimeout(timeout);
  }, [location.hash]);

  return null;
}
