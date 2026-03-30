import { useState, useEffect, useCallback } from "react";

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

  const padEase =
    "duration-500 ease-[cubic-bezier(0.33,0.72,0.25,1)] motion-reduce:duration-150 motion-reduce:ease-linear";

  const contentWidth = "mx-auto w-[90%] max-w-[90%] xl:container";

  /** Same float geometry as small viewports on every breakpoint (xl+ included). */
  const FLOAT_TOP = "max(0.75rem, env(safe-area-inset-top))";
  const PILL_RADIUS = 16;

  const shellStyle = scrolled
    ? {
        borderTopLeftRadius: PILL_RADIUS,
        borderTopRightRadius: PILL_RADIUS,
        borderBottomLeftRadius: PILL_RADIUS,
        borderBottomRightRadius: PILL_RADIUS,
        boxShadow:
          "0 18px 50px rgba(88, 70, 242, 0.12), 0 6px 20px rgba(0, 0, 0, 0.06)",
        paddingTop: 0,
      }
    : {
        borderRadius: 0,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
        paddingTop: "env(safe-area-inset-top)",
      };

  return (
    <div
      className={`pointer-events-none fixed left-0 right-0 top-0 z-[100] flex justify-center transition-[padding-top] ${padEase}`}
      style={{ paddingTop: scrolled ? FLOAT_TOP : 0 }}
    >
      <nav
        className={`pointer-events-auto font-jost min-w-0 transition-[width] duration-500 ease-[cubic-bezier(0.33,0.72,0.25,1)] motion-reduce:transition-none ${
          scrolled
            ? "w-[min(calc(100%-1.25rem),72rem)] max-w-full"
            : "w-full max-w-full"
        }`}
        aria-label="Main navigation"
      >
        <div
          className={`overflow-hidden w-full transition-[padding-top,box-shadow,border-radius] duration-500 ease-[cubic-bezier(0.33,0.72,0.25,1)] motion-reduce:transition-none ${shellSurface} ${scrolled ? "" : "shadow-md"}`}
          style={shellStyle}
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
                    <a
                      key={href}
                      href={href}
                      className={`${linkClass} transition-transform hover:-translate-y-0.5 active:scale-[0.97] motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100`}
                    >
                      {label}
                    </a>
                  ))}
              </div>

              <div className="hidden lg:flex shrink-0 items-center">
                <a href="#contact">
                  <button
                    type="button"
                    className={`group relative overflow-hidden rounded-xl bg-secColor font-semibold text-white shadow-md shadow-secColor/20 transition-[height,padding,font-size] duration-500 ease-[cubic-bezier(0.33,0.72,0.25,1)] hover:shadow-lg hover:shadow-secColor/25 hover:scale-[1.04] active:scale-[0.96] motion-reduce:hover:scale-100 motion-reduce:active:scale-100 ${
                      scrolled
                        ? "h-9 px-5 text-xs"
                        : "h-11 px-7 text-sm"
                    }`}
                  >
                    <span className="relative z-10">Contact Me</span>
                    <span className="absolute inset-0 overflow-hidden rounded-xl">
                      <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full gradient-button transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
                    </span>
                  </button>
                </a>
              </div>

              <button
                type="button"
                className={`flex lg:hidden items-center justify-center rounded-xl text-gray-700 transition-[width,height] duration-500 ease-[cubic-bezier(0.33,0.72,0.25,1)] motion-reduce:transition-none active:scale-90 motion-reduce:active:scale-100 ${
                  scrolled
                    ? "border border-white/60 bg-white/40 backdrop-blur-md hover:bg-white/60 dark:border-white/10 dark:bg-white/5 h-9 w-9"
                    : "border border-gray-200 bg-gray-50 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800 h-10 w-10"
                }`}
                onClick={() => setIsOpen((o) => !o)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
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
              </button>
            </div>
          </div>

          <div
            className={`grid w-full lg:hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div
                className={`max-h-[min(70dvh,28rem)] overflow-y-auto overflow-x-hidden overscroll-y-contain border-t ${
                  scrolled
                    ? "border-white/30 dark:border-white/10"
                    : "border-gray-100 dark:border-gray-800"
                }`}
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
