import { useState, useEffect, useCallback, useRef } from "react";
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
/** After drawer closes, then drop “fake scroll” so bar can animate back to top */
const MOBILE_BAR_RESET_MS = 320;

const EditorialNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  /**
   * Mobile: page at top + user opened menu → bar uses “scrolled” look until menu closes.
   * Real window scroll still wins via `scrolled`; this only fills in when you weren’t scrolled.
   */
  const [forceMobileScrolledLook, setForceMobileScrolledLook] = useState(false);
  const resetBarTimerRef = useRef(null);

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
      if (window.innerWidth >= 1024) {
        if (resetBarTimerRef.current) {
          clearTimeout(resetBarTimerRef.current);
          resetBarTimerRef.current = null;
        }
        setForceMobileScrolledLook(false);
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(
    () => () => {
      if (resetBarTimerRef.current) clearTimeout(resetBarTimerRef.current);
    },
    []
  );

  useEffect(() => {
    if (typeof document === "undefined") return;
    const mq = window.matchMedia("(max-width: 1023px)");
    if (!isOpen || !mq.matches) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const linkClass =
    "text-[14px] font-semibold text-gray-800/90 transition-colors duration-200 hover:text-gray-950 py-1";

  const barFloated = scrolled || forceMobileScrolledLook;

  const shell = barFloated
    ? "border border-black/[0.08] bg-white/55 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl backdrop-saturate-150"
    : "border-b border-black/[0.06] backdrop-blur-xl";

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    if (resetBarTimerRef.current) clearTimeout(resetBarTimerRef.current);
    resetBarTimerRef.current = setTimeout(() => {
      resetBarTimerRef.current = null;
      setForceMobileScrolledLook(false);
    }, MOBILE_BAR_RESET_MS);
  }, []);

  const toggleMobileMenu = () => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 1024) return;

    if (isOpen) {
      closeMenu();
      return;
    }

    if (resetBarTimerRef.current) {
      clearTimeout(resetBarTimerRef.current);
      resetBarTimerRef.current = null;
    }

    if (!scrolled) setForceMobileScrolledLook(true);
    setIsOpen(true);
  };

  /**
   * Below lg, open drawer uses an opaque shell (frosted + hero behind hurts contrast).
   * Shell bg/shadow animate with the outer wrapper so the switch doesn’t snap.
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
      {isOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          className="pointer-events-auto fixed inset-0 z-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ease-out supports-[backdrop-filter]:bg-black/22 lg:hidden motion-reduce:backdrop-blur-none"
          onClick={closeMenu}
        />
      ) : null}
      <nav
        className="pointer-events-auto relative z-10 w-full max-w-[1240px] font-jost"
        aria-label="Main navigation"
      >
        <div
          className={`overflow-hidden transition-[margin-top,border-radius,background-color,box-shadow,border-color] duration-300 ease-out motion-reduce:transition-none ${shell} ${isOpen ? shellOpenMobileOverlay : ""}`}
          style={{
            marginTop: barFloated ? 10 : 0,
            borderRadius: barFloated ? 18 : 0,
          }}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5 ">
            <a
              href="#home"
              className="inline-flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight text-gray-950 sm:text-xl"
              onClick={closeMenu}
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
              onClick={toggleMobileMenu}
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

          {/* grid 0fr→1fr: smooth height without max-height jank (vh jumps on mobile also avoided via dvh cap) */}
          <div
            className={`grid w-full bg-[#eae8e4] lg:hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="max-h-[min(70dvh,28rem)] overflow-y-auto overflow-x-hidden overscroll-y-contain scrollBar border-t border-black/[0.1] [contain:content]">
                <div className="flex flex-col gap-0.5 px-3 py-3 sm:px-4">
                  {links.map(({ label, href }) => (
                    <a
                      key={href + label}
                      href={href}
                      className={mobileMenuLinkClass}
                      onClick={closeMenu}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href={PDF}
                    download="Fardus_Hassan_Resume"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#1a1a1a] py-2.5 text-sm font-semibold text-white"
                    onClick={closeMenu}
                  >
                    <MdFileDownload />
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default EditorialNav;
