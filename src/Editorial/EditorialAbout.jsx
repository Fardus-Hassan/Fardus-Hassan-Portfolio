import CountUp from "react-countup";
import aboutme from "../assets/about-me.jpeg";
// import useGithubLifetimeCommits from "../hooks/useGithubLifetimeCommits";
import { useOnScreen } from "./lib/useOnScreen";
import EditorialSection from "./EditorialSection";

const techChips = [
  "React",
  "Next.js",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Tailwind",
  "AI SDK",
];

const EditorialAbout = () => {
  // const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
  // const token = import.meta.env.VITE_GITHUB_TOKEN;
  // const { totalCommits, loading, error } = useGithubLifetimeCommits(
  //   GITHUB_USERNAME,
  //   token
  // );

  const [ref1, isVisible1] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });

  return (
    <EditorialSection
      id="about"
      kicker="About"
      title="SaaS, ERP, and clean product UI"
      subtitle="4+ years building production platforms with React, Next.js, NestJS, and TypeScript — plus AI integration and React Native."
      className="!max-w-[1240px]"
      loading="lazy"

    >
      <div
        className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14"
        data-aos="fade-up"
        data-aos-delay="80"
        loading="lazy"
      >
        {/* Photo column */}
        <div
          className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:mx-0"
          data-aos="zoom-in"
          data-aos-delay="120"
        >
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
                  alt="Md. Fardus Hassan"
                  loading="lazy"
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
                Gazipur, Dhaka
              </p>
            </div>
          </div>
        </div>

        {/* Copy + cards + stats */}
        <div className="space-y-8 lg:col-span-7" data-aos="fade-up" data-aos-delay="150">
          <p className="text-center font-jost text-xl font-semibold leading-snug tracking-tight text-gray-950 sm:text-2xl lg:text-left" data-aos="fade-up">
            I ship{" "}
            <span className="text-emerald-800">scalable SaaS and ERP systems</span>{" "}
            — 10+ production platforms, from institutes to e-commerce.
          </p>

          <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-up" data-aos-delay="220">
            <div className="editorial-card p-6 text-left" data-aos="fade-up" data-aos-delay="240">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                  Front-end
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-800">
                React.js, Next.js, TypeScript, JavaScript, Redux, Zustand,
                TanStack Query, React Native, Tailwind CSS, Bootstrap, Three.js,
                and REST API integration.
              </p>
            </div>
            <div className="editorial-card p-6 text-left" data-aos="fade-up" data-aos-delay="290">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                  Backend &amp; data
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-800">
                Node.js, Express.js, NestJS, MongoDB, PostgreSQL, Prisma, Redis,
                JWT, and OpenAI / AI SDKs — auth, APIs, and production data.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 lg:justify-start" data-aos="zoom-in-up" data-aos-delay="320">
            {techChips.map((t, idx) => (
              <span
                key={t}
                className="rounded-full border border-black/[0.08] bg-white/50 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur-sm"
                data-aos="zoom-in"
                data-aos-delay={320 + idx * 40}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3" data-aos="fade-up" data-aos-delay="380">
            <div
              ref={ref1}
              className="editorial-card flex flex-col justify-center p-6 text-center sm:text-left col-span-2 sm:col-span-1"
              data-aos="flip-up"
              data-aos-delay="390"
            >
              {/* <p className="text-3xl font-bold tabular-nums text-gray-950 sm:text-4xl">
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
              ) : null} */}
              <p className="text-3xl font-bold tabular-nums text-gray-950 sm:text-4xl">
                {isVisible1 ? (
                  <CountUp end={4} duration={2.2} suffix="+" />
                ) : (
                  "4+"
                )}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ed-muted)]">
                Years experience
              </p>
            </div>
            <div
              ref={ref2}
              className="editorial-card flex flex-col justify-center p-6 text-center sm:text-left"
              data-aos="flip-up"
              data-aos-delay="430"
            >
              <p className="text-3xl font-bold tabular-nums text-gray-950 sm:text-4xl">
                {isVisible2 ? (
                  <CountUp end={10} duration={2.4} suffix="+" />
                ) : (
                  "10+"
                )}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ed-muted)]">
                Production platforms
              </p>
            </div>
            <div
              ref={ref3}
              className="editorial-card flex flex-col justify-center p-6 text-center sm:text-left"
              data-aos="flip-up"
              data-aos-delay="470"
            >
              <p className="text-3xl font-bold tabular-nums text-gray-950 sm:text-4xl">
                {isVisible3 ? <CountUp end={4} duration={2.2} /> : "4"}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ed-muted)]">
                Roles
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-[var(--ed-muted)] lg:text-left" data-aos="fade-up" data-aos-delay="520">
            Gazipur, Dhaka, Bangladesh · Diploma in Mechanical Engineering, MIST
          </p>
        </div>
      </div>
    </EditorialSection>
  );
};

export default EditorialAbout;
