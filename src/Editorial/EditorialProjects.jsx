import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiOutlineRefresh } from "react-icons/hi";
import EditorialSection from "./EditorialSection";
import { editorialProjects } from "./data/projectsData";

const EditorialProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reloadKeys, setReloadKeys] = useState(() =>
    editorialProjects.map(() => 0)
  );

  const active = editorialProjects[activeIndex];
  const displayHost = active.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  const reloadActivePreview = () => {
    setReloadKeys((prev) => {
      const next = [...prev];
      next[activeIndex] += 1;
      return next;
    });
  };

  return (
    <EditorialSection
      id="projects"
      kicker="Projects"
      title="Live work — browse in place"
      subtitle="All previews load in the background so switching projects is instant. Each frame is the real deployment — if a host blocks embedding, use Open."
      className="!max-w-[1240px] px-1 xs:px-0"
    >
      <div className="relative mb-6 sm:mb-10 lg:mb-12">
        <div
          className="pointer-events-none absolute -bottom-2 -right-2 left-6 top-6 hidden rounded-2xl border border-black/[0.07] bg-white/20 sm:block"
          aria-hidden
        />
        <div className="editorial-card relative overflow-hidden p-4 shadow-[0_24px_60px_rgba(0,0,0,0.07)] sm:p-6 md:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-400/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="min-w-0">
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-800">
                  In-page browser
                </span>
              </div>
              <p className="mt-3 text-center font-jost text-base font-semibold leading-snug text-gray-950 text-balance sm:text-lg md:text-xl lg:text-left">
                Same URLs as production — scroll, navigate, and try flows without
                leaving the portfolio.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 lg:justify-end">
              <span className="rounded-full border border-black/[0.08] bg-white/55 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur-sm">
                {editorialProjects.length} deployments
              </span>
              <span className="rounded-full border border-black/[0.08] bg-white/55 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur-sm">
                Full-width iframe
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: preview first (order-1); desktop: grid with aside left */}
      <div className="grid min-w-0 grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10">
        <aside className="order-2 min-w-0 lg:order-none lg:col-span-4 lg:sticky lg:top-28 lg:z-10 lg:self-start">
          <div className="mb-2 flex items-center gap-2 sm:mb-3 lg:justify-start">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
              Pick a project
            </span>
          </div>
          <p className="mb-3 text-center text-xs leading-relaxed text-[var(--ed-muted)] lg:hidden">
            Swipe sideways to see all — tap to load the live site above.
          </p>
          <div
            className="editorial-picker-scroll -mx-2 flex gap-2.5 overflow-x-auto overscroll-x-contain px-2 pb-2 pt-0.5 scroll-smooth snap-x snap-mandatory sm:-mx-1 sm:gap-2 sm:px-1 lg:mx-0 lg:max-h-[min(70dvh,calc(100dvh-12rem))] lg:flex-col lg:gap-2 lg:overflow-y-auto lg:overflow-x-visible lg:px-0 lg:pb-0 lg:pr-2 lg:snap-none"
            role="tablist"
            aria-label="Project previews"
          >
            {editorialProjects.map((p, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={p.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(i)}
                  className={`snap-center min-h-[44px] w-[min(86vw,19.5rem)] shrink-0 rounded-2xl border px-4 py-3.5 text-left transition-all active:scale-[0.99] sm:snap-start sm:min-h-0 sm:min-w-[200px] sm:w-auto sm:py-3 lg:w-full ${
                    isActive
                      ? "border-gray-950 bg-gray-950 text-white shadow-lg shadow-black/15"
                      : "border-black/[0.08] bg-white/50 backdrop-blur-sm hover:border-black/15 hover:bg-white/80"
                  }`}
                >
                  <span
                    className={`block text-[10px] font-bold uppercase tracking-[0.18em] ${
                      isActive ? "text-white/60" : "text-[var(--ed-muted)]"
                    }`}
                  >
                    {isActive ? "Showing" : "Project"}
                  </span>
                  <span
                    className={`mt-1 block text-sm font-bold leading-tight ${
                      isActive ? "text-white" : "text-gray-950"
                    }`}
                  >
                    {p.name}
                  </span>
                  <span
                    className={`mt-1 line-clamp-2 text-xs leading-snug ${
                      isActive ? "text-white/75" : "text-[var(--ed-muted)]"
                    }`}
                  >
                    {p.title}
                  </span>
                  {p.lines?.length ? (
                    <span
                      className={`mt-2 block border-t pt-2 text-[10px] leading-relaxed ${
                        isActive
                          ? "border-white/15 text-white/80"
                          : "border-black/[0.06] text-gray-600"
                      }`}
                    >
                      {p.lines.join(" · ")}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </aside>

        <div className="order-1 min-w-0 lg:order-none lg:col-span-8">
          <p className="mb-2 text-center text-xs font-semibold text-gray-800 lg:hidden">
            Live preview
          </p>
          <div className="editorial-card overflow-hidden p-0 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col gap-3 border-b border-black/[0.08] bg-white/80 px-3 py-3 backdrop-blur-md sm:gap-2 sm:px-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 flex-1 items-start gap-2">
                  <div className="mt-1.5 hidden shrink-0 items-center gap-1.5 sm:flex" aria-hidden>
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-tight text-gray-950 sm:text-base">
                      {active.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-[var(--ed-muted)] line-clamp-2 sm:line-clamp-none">
                      {active.title}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={reloadActivePreview}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.1] bg-white text-gray-800 transition-colors hover:bg-white active:bg-gray-50 sm:h-9 sm:w-9"
                    title="Reload preview"
                    aria-label="Reload preview"
                  >
                    <HiOutlineRefresh className="text-lg" />
                  </button>
                  <a
                    href={active.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 min-w-[5.5rem] items-center justify-center gap-1.5 rounded-full bg-gray-950 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-colors hover:bg-gray-900 active:bg-gray-800"
                  >
                    <FaArrowUpRightFromSquare className="text-[10px] opacity-90" />
                    Open
                  </a>
                </div>
              </div>
              <div className="w-full break-all rounded-lg border border-black/[0.08] bg-black/[0.03] px-2.5 py-2 font-mono text-[10px] leading-relaxed text-gray-700 sm:max-w-full sm:truncate sm:break-normal lg:max-w-[min(100%,24rem)]">
                {displayHost}
              </div>
            </div>

            {active.lines?.length ? (
              <div className="border-b border-amber-200/70 bg-amber-50/95 px-3 py-2.5 text-xs text-amber-950 sm:px-4">
                <p className="font-bold uppercase tracking-[0.12em] text-amber-900/90">
                  Demo access
                </p>
                <ul className="mt-1 space-y-0.5 break-words font-mono text-[11px] text-amber-950/90">
                  {active.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* One iframe per project, all mounted + eager — only the active layer is visible & interactive */}
            <div
              className="relative isolate bg-[#e8e6e2] aspect-[4/5] max-h-[min(72dvh,640px)] min-h-[260px] w-full xs:min-h-[280px] sm:aspect-auto sm:h-[min(58dvh,560px)] sm:max-h-none sm:min-h-[320px] md:min-h-[380px] lg:h-[min(74dvh,860px)] lg:min-h-[420px]"
            >
              {editorialProjects.map((p, i) => {
                const isActive = i === activeIndex;
                return (
                  <iframe
                    key={`${p.iframeSrc}-${reloadKeys[i]}`}
                    title={`${p.name} — live site`}
                    src={p.iframeSrc}
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                    tabIndex={isActive ? 0 : -1}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 h-full w-full border-0 ${
                      isActive
                        ? "z-[1] opacity-100"
                        : "z-0 opacity-0 pointer-events-none"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          <p className="mt-3 px-1 text-center text-[11px] leading-relaxed text-[var(--ed-muted)] sm:mt-4 sm:text-xs lg:px-0 lg:text-left">
            Every project loads in its own frame in the background (heavier on
            first visit). If a preview stays blank, the host may block iframes —
            use <strong className="font-semibold text-gray-800">Open</strong>.
          </p>
        </div>
      </div>
    </EditorialSection>
  );
};

export default EditorialProjects;
