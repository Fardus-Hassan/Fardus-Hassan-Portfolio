/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/** Full-page shell: base tint, fixed grain & blobs — matches BannerEditorial mood site-wide */
const EditorialPage = ({ children }) => {
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lenis = null;
    let rafId = 0;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 1.1,
      });

      const raf = (time) => {
        lenis.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };
      rafId = window.requestAnimationFrame(raf);
    }

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="editorial-page font-jost relative">
      <div className="editorial-page-blobs" aria-hidden />
      <div className="editorial-page-grain" aria-hidden />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};

export default EditorialPage;
