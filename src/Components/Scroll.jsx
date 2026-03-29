import { useState, useEffect, useCallback } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

const SHOW_AFTER_PX = 400;

function Scroll() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(window.scrollY > SHOW_AFTER_PX);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollTop}
      className="fixed z-[95] flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.12] bg-gray-950 text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-[transform,box-shadow,background-color] hover:bg-gray-900 hover:shadow-[0_14px_36px_rgba(0,0,0,0.22)] active:scale-[0.96] sm:h-12 sm:w-12"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
        right: "max(1.25rem, env(safe-area-inset-right, 0px))",
      }}
      aria-label="Back to top"
    >
      <HiOutlineArrowUp className="text-[1.35rem] sm:text-2xl" aria-hidden />
    </button>
  );
}

export default Scroll;
