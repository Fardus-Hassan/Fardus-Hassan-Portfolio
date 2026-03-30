/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/** Full-page shell: base tint, fixed grain & blobs — matches BannerEditorial mood site-wide */
const EditorialPage = ({ children }) => {
  useEffect(() => {
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
    // In case images/fonts affect layout, give AOS a chance to measure.
    const t = window.setTimeout(() => AOS.refresh(), 250);
    return () => window.clearTimeout(t);
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
