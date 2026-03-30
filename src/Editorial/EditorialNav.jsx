import { useState, useEffect, useCallback } from "react";
import PDF from "../assets/Junior_Software_Engineer_Fardus_Hassan .pdf";
import { MdFileDownload } from "react-icons/md";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact", mobileOnly: true },
];

const SCROLL_COMPACT_AFTER = 10;
const SCROLL_EXPAND_BEFORE = 10;

const EditorialNav = () => {
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

  const linkClass =
    "text-[14px] font-semibold text-gray-800/90 transition-colors duration-200 hover:text-gray-950 py-1";

  const shell = scrolled
    ? "border border-black/[0.08] bg-white/55 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl backdrop-saturate-150"
    : "border-b border-black/[0.06] backdrop-blur-sm";

  /**
   * Below lg, an open drawer on frosted glass + backdrop-blur stacks the hero behind and wrecks contrast.
   * Switch to an opaque page-colored shell while the menu is open.
   */
  const shellOpenMobileOverlay =
    "max-lg:border max-lg:border-black/[0.12] max-lg:bg-[var(--page-bg)] max-lg:shadow-[0_20px_50px_rgba(0,0,0,0.14)] max-lg:backdrop-blur-none max-lg:backdrop-saturate-100";

  const mobileMenuLinkClass =
    "block rounded-xl px-3 py-3 text-center text-[15px] font-semibold text-gray-950 transition-colors hover:bg-black/[0.06] active:bg-black/[0.08]";

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] flex justify-center px-3 sm:px-4"
      style={{ paddingTop: "max(0.5rem, env(safe-area-inset-top))" }}
    >
      <nav
        className="pointer-events-auto w-full max-w-[1200px] font-jost"
        aria-label="Main navigation"
      >
        <div
          className={`overflow-hidden transition-[margin-top,border-radius] duration-300 ease-out motion-reduce:transition-none ${shell} ${isOpen ? shellOpenMobileOverlay : ""}`}
          style={{
            marginTop: scrolled ? 10 : 0,
            borderRadius: scrolled ? 18 : 0,
          }}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5">
            <a
              href="#home"
              className="inline-flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight text-gray-950 sm:text-xl"
              onClick={() => setIsOpen(false)}
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.35)] max-lg:shadow-[0_0_4px_rgba(16,185,129,0.25)]"
                aria-hidden
              />
              &lt;Fardus/&gt;
            </a>

            <div className="hidden flex-1 items-center justify-center gap-7 lg:flex">
              {links
                .filter((l) => !l.mobileOnly)
                .map(({ label, href }) => (
                  <a key={href} href={href} className={linkClass}>
                    {label}
                  </a>
                ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={PDF}
                download="Fardus_Hassan_Resume"
                className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-4 py-2 text-xs font-semibold text-white shadow-md transition-transform hover:scale-[1.02] sm:text-sm"
              >
                <MdFileDownload className="text-base" aria-hidden />
                Download CV
              </a>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/15 bg-white text-gray-950 shadow-sm lg:hidden"
              onClick={() => setIsOpen((o) => !o)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <span className="text-xl leading-none">×</span>
              ) : (
                <span className="flex flex-col gap-1.5">
                  <span className="h-0.5 w-5 rounded-full bg-current" />
                  <span className="h-0.5 w-5 rounded-full bg-current" />
                </span>
              )}
            </button>
          </div>

          <div
            className={`border-t border-black/[0.1] transition-[max-height] duration-300 ease-out lg:hidden ${
              isOpen
                ? "max-h-[min(75vh,460px)] overflow-y-auto scrollBar"
                : "max-h-0 overflow-hidden"
            }`}
          >
            <div
              className={`flex flex-col gap-0.5 px-3 py-3 sm:px-4 ${
                isOpen ? "bg-[var(--page-bg)]" : ""
              }`}
            >
              {links.map(({ label, href }) => (
                <a
                  key={href + label}
                  href={href}
                  className={mobileMenuLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a
                href={PDF}
                download="Fardus_Hassan_Resume"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#1a1a1a] py-2.5 text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                <MdFileDownload />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default EditorialNav;
