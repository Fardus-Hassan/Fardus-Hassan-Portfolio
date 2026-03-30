import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Buttery wheel + touch scrolling via Lenis. Skipped when user prefers reduced motion.
 * Anchor links (#) use Lenis when enabled.
 */
function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    // Lower lerp = longer ease-out glide (clearly “smooth”); too low fights Framer + heavy paint.
    // wheelMultiplier < 1 stretches each step so inertia is easier to feel on wheel / trackpad.
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: coarsePointer,
      syncTouchLerp: coarsePointer ? 0.085 : 0.1,
      touchInertiaExponent: 1.5,
      lerp: 0.082,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      anchors: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

export default SmoothScroll;
