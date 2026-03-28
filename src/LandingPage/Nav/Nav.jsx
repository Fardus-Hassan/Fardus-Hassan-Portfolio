import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact", mobileOnly: true },
];

/** Hysteresis stops rapid toggling at one threshold (rubber-band / slow scroll). */
const SCROLL_COMPACT_AFTER = 52;
const SCROLL_EXPAND_BEFORE = 16;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  const onScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled((prev) => {
      if (prev) return y > SCROLL_EXPAND_BEFORE;
      return y > SCROLL_COMPACT_AFTER;
    });
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const shellSurface = scrolled
    ? "border border-white/50 bg-white/65 backdrop-blur-xl backdrop-saturate-150 [@supports(backdrop-filter:blur(0))]:bg-white/55 dark:border-white/10 dark:bg-gray-900/55 dark:[@supports(backdrop-filter:blur(0))]:bg-gray-900/45"
    : "bg-white border-b border-gray-200/90 backdrop-blur-none dark:bg-gray-950 dark:border-gray-800/90";

  const linkClass =
    "text-[15px] font-semibold text-gray-800 dark:text-gray-100 " +
    "hover:text-pmColor transition-colors duration-300 py-1";

  /** Calmer when expanding to full top bar (scroll up) — avoids overshoot / jitter. */
  const easeNav = reduceMotion
    ? { type: "tween", duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }
    : scrolled
      ? {
          type: "spring",
          stiffness: 320,
          damping: 34,
          mass: 0.88,
          restDelta: 0.001,
        }
      : {
          type: "spring",
          stiffness: 260,
          damping: 38,
          mass: 1,
          restDelta: 0.001,
        };

  const easeShell = reduceMotion
    ? { type: "tween", duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
    : scrolled
      ? {
          type: "spring",
          stiffness: 400,
          damping: 24,
          mass: 0.6,
        }
      : {
          type: "spring",
          stiffness: 280,
          damping: 36,
          mass: 0.85,
        };

  const easeTap = { type: "spring", stiffness: 500, damping: 28 };

  const padEase =
    "duration-500 ease-[cubic-bezier(0.33,0.72,0.25,1)] motion-reduce:duration-150 motion-reduce:ease-linear";

  const contentWidth = "mx-auto w-[90%] max-w-[90%] xl:container";

  /** Same float geometry as small viewports on every breakpoint (xl+ included). */
  const FLOAT_TOP = "max(0.75rem, env(safe-area-inset-top))";
  const FLOAT_WIDTH = "min(calc(100% - 1.25rem), 72rem)";
  const PILL_RADIUS = 16;

  return (
    <div
      className={`pointer-events-none fixed left-0 right-0 top-0 z-[100] flex justify-center transition-[padding-top] ${padEase}`}
      style={{ paddingTop: scrolled ? FLOAT_TOP : 0 }}
    >
      <motion.nav
        className="pointer-events-auto font-jost min-w-0 max-w-full"
        initial={false}
        animate={{ width: scrolled ? FLOAT_WIDTH : "100%" }}
        transition={easeNav}
        aria-label="Main navigation"
      >
      <motion.div
        className={`overflow-hidden w-full transition-[padding-top] ${padEase} ${shellSurface} ${scrolled ? "" : "shadow-md"}`}
        initial={false}
        animate={{
          borderTopLeftRadius: scrolled ? PILL_RADIUS : 0,
          borderTopRightRadius: scrolled ? PILL_RADIUS : 0,
          borderBottomLeftRadius: scrolled ? PILL_RADIUS : 0,
          borderBottomRightRadius: scrolled ? PILL_RADIUS : 0,
          boxShadow: scrolled
            ? "0 18px 50px rgba(88, 70, 242, 0.12), 0 6px 20px rgba(0, 0, 0, 0.06)"
            : "0 1px 3px rgba(0, 0, 0, 0.08)",
        }}
        transition={easeShell}
        style={{
          paddingTop: scrolled ? 0 : "env(safe-area-inset-top)",
        }}
      >
        <div className={scrolled ? "" : contentWidth}>
          <div
            className={`flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 transition-[padding] duration-500 ease-[cubic-bezier(0.33,1.18,0.52,1)] ${
              scrolled ? "py-2" : "py-3 sm:py-4"
            }`}
          >
            <a
              href="#home"
              className={`gradient-color shrink-0 jost-bold leading-none transition-[font-size] duration-500 ease-[cubic-bezier(0.33,1.18,0.52,1)] ${
                scrolled
                  ? "text-xl sm:text-2xl"
                  : "text-2xl sm:text-3xl md:text-4xl"
              }`}
              onClick={() => setIsOpen(false)}
            >
              &lt;<span className="text-[0.9em] font-black">Fardus</span>
              <span className="font-bold">/</span>&gt;
            </a>

            <div className="hidden lg:flex flex-1 items-center justify-center gap-6">
              {links
                .filter((l) => !l.mobileOnly)
                .map(({ label, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    className={linkClass}
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                    transition={easeTap}
                  >
                    {label}
                  </motion.a>
                ))}
            </div>

            <div className="hidden lg:flex shrink-0 items-center">
              <motion.a
                href="#contact"
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={easeTap}
              >
                <motion.button
                  type="button"
                  className="group relative overflow-hidden rounded-xl bg-secColor font-semibold text-white shadow-md shadow-secColor/20 hover:shadow-lg hover:shadow-secColor/25"
                  initial={false}
                  animate={{
                    height: scrolled ? 36 : 44,
                    paddingLeft: scrolled ? 20 : 28,
                    paddingRight: scrolled ? 20 : 28,
                    fontSize: scrolled ? 12 : 14,
                  }}
                  transition={easeShell}
                  whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                >
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute inset-0 overflow-hidden rounded-xl">
                    <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full gradient-button transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
                  </span>
                </motion.button>
              </motion.a>
            </div>

            <motion.button
              type="button"
              className={`flex lg:hidden items-center justify-center rounded-xl text-gray-700 dark:text-gray-200 ${
                scrolled
                  ? "border border-white/60 bg-white/40 backdrop-blur-md hover:bg-white/60 dark:border-white/10 dark:bg-white/5"
                  : "border border-gray-200 bg-gray-50 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
              }`}
              onClick={() => setIsOpen((o) => !o)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              initial={false}
              animate={{
                width: scrolled ? 36 : 40,
                height: scrolled ? 36 : 40,
              }}
              transition={easeShell}
              whileTap={reduceMotion ? undefined : { scale: 0.9 }}
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={scrolled ? "h-5 w-5" : "h-6 w-6"}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={scrolled ? "h-5 w-5" : "h-6 w-6"}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        <div
          className={`lg:hidden border-t overflow-hidden transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none ${
            scrolled
              ? "border-white/30 dark:border-white/10"
              : "border-gray-100 dark:border-gray-800"
          } ${isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className={scrolled ? "" : contentWidth}>
            <div className="flex flex-col items-center gap-1 px-4 pb-5 pt-2">
              {links.map(({ label, href }) => (
                <a
                  key={href + label}
                  href={href}
                  className={`${linkClass} w-full text-center rounded-xl py-3 ${
                    scrolled
                      ? "hover:bg-white/50 dark:hover:bg-white/5"
                      : "hover:bg-gray-50 dark:hover:bg-gray-900/80"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      </motion.nav>
    </div>
  );
};

export default Nav;
