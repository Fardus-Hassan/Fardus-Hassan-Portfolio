/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/** Full-page shell: base tint, fixed grain & blobs — matches BannerEditorial mood site-wide */
const EditorialPage = ({ children }) => {
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 70,
      // Prevent AOS from reacting to React re-renders / attribute changes.
      disableMutationObserver: true,
      // Avoid missing animations on already-visible content.
      startEvent: "DOMContentLoaded",
    });

    let lenis = null;
    let rafId = 0;
    let resizeTimer = 0;

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

    // In case images/fonts affect layout, give AOS a chance to measure.
    const t = window.setTimeout(() => AOS.refresh(), 250);
    const onResize = () => {
      if (resizeTimer) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => AOS.refresh(), 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", onResize);
      if (resizeTimer) window.clearTimeout(resizeTimer);
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
