/**
 * Minimal full-page loader — matches editorial page background & type tone.
 */
function Spinner() {
  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-3 bg-[var(--page-bg)]/90 backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div
        className="h-8 w-8 motion-safe:animate-spin rounded-full border-2 border-black/[0.1] border-t-emerald-700 motion-reduce:animate-none motion-reduce:border-t-gray-800"
        aria-hidden
      />
      <p className="font-jost text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5c5a56]">
        Loading
      </p>
      <span className="sr-only">Loading, please wait</span>
    </div>
  );
}

export default Spinner;
