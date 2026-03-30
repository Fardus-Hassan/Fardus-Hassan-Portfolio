import CountUp from "react-countup";
import aboutme from "../assets/about-me.jpeg";
import useGithubLifetimeCommits from "../hooks/useGithubLifetimeCommits";
import { useOnScreen } from "./lib/useOnScreen";
import EditorialSection from "./EditorialSection";

const techChips = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "Redux",
  "REST APIs",
];

const EditorialAbout = () => {
  const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const { totalCommits, loading, error } = useGithubLifetimeCommits(
    GITHUB_USERNAME,
    token
  );

  const [ref1, isVisible1] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });

  return (
    <EditorialSection
      id="about"
      kicker="About"
      title="Code, craft, and clarity"
      subtitle="Mechanical engineering roots — now shipping full-stack web products with a focus on UX and maintainability."
      className="!max-w-[1240px]"
    >
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Photo column */}
        <div className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:mx-0">
          <div className="relative">
            <div
              className="pointer-events-none absolute -bottom-4 -right-4 left-8 top-8 rounded-2xl border border-black/[0.07] bg-white/20"
              aria-hidden
            />
            <div className="editorial-card group relative overflow-hidden p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
              <div className="overflow-hidden rounded-xl">
                <img
                  className="aspect-[3/3.85] w-full object-cover object-top grayscale transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
                  src={aboutme}
                  alt="Fardus Hassan"
                />
              </div>
              <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 shadow-sm backdrop-blur-sm">
                Portrait
              </div>
            </div>
            <div className="absolute -left-2 bottom-8 hidden max-w-[200px] rounded-xl border border-black/[0.06] bg-white/70 px-4 py-3 text-left shadow-lg backdrop-blur-md sm:block lg:-left-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
                Based in
              </p>
              <p className="mt-1 text-sm font-bold text-gray-950">
                Gazipur, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Copy + cards + stats */}
        <div className="space-y-8 lg:col-span-7">
          <p className="text-center font-jost text-xl font-semibold leading-snug tracking-tight text-gray-950 sm:text-2xl lg:text-left">
            I turn complex requirements into{" "}
            <span className="text-emerald-800">fast, accessible interfaces</span>{" "}
            — and reliable backends to power them.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="editorial-card p-6 text-left">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                  Front-end &amp; product
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-800">
                HTML5, CSS3, Tailwind, Bootstrap, JavaScript, TypeScript, React,
                Next.js, Redux, REST APIs, Firebase Auth — and React Native in
                progress for mobile.
              </p>
            </div>
            <div className="editorial-card p-6 text-left">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                  Backend &amp; workflow
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-800">
                Node.js, Express, MongoDB. Daily tools: VS Code, Cursor, Git,
                GitHub, Vercel, Figma, Netlify — from prototype to production.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {techChips.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/[0.08] bg-white/50 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div
              ref={ref1}
              className="editorial-card flex flex-col justify-center p-6 text-center sm:text-left"
            >
              <p className="text-3xl font-bold tabular-nums text-gray-950 sm:text-4xl">
                {isVisible1 ? (
                  loading ? (
                    "…"
                  ) : error ? (
                    "—"
                  ) : (
                    <CountUp end={totalCommits} duration={2.5} separator="," />
                  )
                ) : loading ? (
                  "…"
                ) : error ? (
                  "—"
                ) : (
                  totalCommits
                )}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ed-muted)]">
                GitHub commits
              </p>
              {error ? (
                <p className="mt-1 text-center text-xs text-red-600 sm:text-left">
                  {error}
                </p>
              ) : null}
            </div>
            <div
              ref={ref2}
              className="editorial-card flex flex-col justify-center p-6 text-center sm:text-left"
            >
              <p className="text-3xl font-bold tabular-nums text-gray-950 sm:text-4xl">
                {isVisible2 ? (
                  <CountUp end={100} duration={3} suffix="%" />
                ) : (
                  "100%"
                )}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ed-muted)]">
                Commitment
              </p>
            </div>
            <div
              ref={ref3}
              className="editorial-card flex flex-col justify-center p-6 text-center sm:text-left"
            >
              <p className="text-3xl font-bold tabular-nums text-gray-950 sm:text-4xl">
                {isVisible3 ? <CountUp end={2} duration={3} suffix="+" /> : "2+"}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ed-muted)]">
                Roles shipped
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-[var(--ed-muted)] lg:text-left">
            Joydebpur, Gazipur · Open to remote-friendly collaborations
          </p>
        </div>
      </div>
    </EditorialSection>
  );
};

export default EditorialAbout;
