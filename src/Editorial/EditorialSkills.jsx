/* eslint-disable react/prop-types -- SkillTile receives stable skill objects */
import { useEffect, useState } from "react";
import AOS from "aos";
import {
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiNetlify,
  SiVercel,
  SiOpenai,
  SiReactquery,
  SiThreedotjs,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiJsonwebtokens,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiPostman,
  SiLinux,
  SiPm2,
} from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { HiOutlineCube, HiOutlineLockClosed, HiOutlineServer, HiOutlineSparkles } from "react-icons/hi";
import EditorialSection from "./EditorialSection";

const skillCategories = [
  {
    title: "Frontend",
    blurb: "Interfaces, state, and typed UI for web and mobile.",
    skills: [
      { icon: <FaReact className="text-gray-800" />, name: "React.js" },
      { icon: <SiNextdotjs className="text-gray-800" />, name: "Next.js" },
      { icon: <SiTypescript className="text-gray-800" />, name: "TypeScript" },
      { icon: <FaJsSquare className="text-gray-800" />, name: "JavaScript" },
      { icon: <SiRedux className="text-gray-800" />, name: "Redux" },
      { icon: <HiOutlineCube className="text-gray-800" />, name: "Zustand" },
      { icon: <SiReactquery className="text-gray-800" />, name: "TanStack Query" },
      { icon: <TbBrandReactNative className="text-gray-800" />, name: "React Native" },
      { icon: <SiTailwindcss className="text-gray-800" />, name: "Tailwind CSS" },
      { icon: <FaBootstrap className="text-gray-800" />, name: "Bootstrap" },
      { icon: <TbApi className="text-gray-800" />, name: "REST API Integration" },
      { icon: <SiThreedotjs className="text-gray-800" />, name: "Three.js" },
    ],
  },
  {
    title: "Backend",
    blurb: "APIs, data, auth, and AI SDKs in production.",
    skills: [
      { icon: <FaNodeJs className="text-gray-800" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-800" />, name: "Express.js" },
      { icon: <SiNestjs className="text-gray-800" />, name: "NestJS" },
      { icon: <SiMongodb className="text-gray-800" />, name: "MongoDB" },
      { icon: <SiPostgresql className="text-gray-800" />, name: "PostgreSQL" },
      { icon: <SiPrisma className="text-gray-800" />, name: "Prisma" },
      { icon: <SiRedis className="text-gray-800" />, name: "Redis" },
      { icon: <SiJsonwebtokens className="text-gray-800" />, name: "JWT" },
      { icon: <TbApi className="text-gray-800" />, name: "REST API Development" },
      { icon: <HiOutlineLockClosed className="text-gray-800" />, name: "Auth" },
      { icon: <SiOpenai className="text-gray-800" />, name: "OpenAI SDK" },
      { icon: <HiOutlineSparkles className="text-gray-800" />, name: "AI SDK" },
    ],
  },
  {
    title: "DevOps Tools",
    blurb: "Source control, containers, CI, and deployment.",
    skills: [
      { icon: <FaGitAlt className="text-gray-800" />, name: "Git" },
      { icon: <FaGithub className="text-gray-800" />, name: "GitHub" },
      { icon: <SiDocker className="text-gray-800" />, name: "Docker" },
      { icon: <SiGithubactions className="text-gray-800" />, name: "GitHub Actions" },
      { icon: <SiVercel className="text-gray-800" />, name: "Vercel" },
      { icon: <SiNetlify className="text-gray-800" />, name: "Netlify" },
      { icon: <SiNginx className="text-gray-800" />, name: "Nginx" },
      { icon: <SiPm2 className="text-gray-800" />, name: "PM2" },
      { icon: <HiOutlineServer className="text-gray-800" />, name: "VPS Deployment" },
      { icon: <SiGithubactions className="text-gray-800" />, name: "CI/CD" },
      { icon: <SiPostman className="text-gray-800" />, name: "Postman" },
      { icon: <SiLinux className="text-gray-800" />, name: "Linux" },
    ],
  },
];

function SkillTile({ skill, index }) {
  return (
    <div
      className="editorial-card group relative flex flex-col items-center overflow-hidden p-5 shadow-[0_12px_36px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] sm:p-6"
      data-aos="zoom-in-up"
      data-aos-delay={index != null ? 120 + index * 60 : 120}
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.06] bg-white/70 text-3xl text-gray-800 transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:text-[2rem]">
        {skill.icon}
      </div>
      <p className="text-center text-xs font-semibold text-gray-900 sm:text-sm">
        {skill.name}
      </p>
    </div>
  );
}

const EditorialSkills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const allSkills = skillCategories.flatMap((c) => c.skills);
  const totalCount = allSkills.length;

  // Tab content is conditionally shown; since AOS mutation observer is disabled,
  // force a refresh when tab changes so new elements don't remain hidden.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const t = window.setTimeout(() => {
      if (typeof AOS?.refreshHard === "function") AOS.refreshHard();
      else AOS?.refresh?.();
    }, 0);
    return () => window.clearTimeout(t);
  }, [activeTab]);

  return (
    <EditorialSection
      id="skills"
      kicker="Skills"
      title="Stack I build and ship with"
      subtitle="Frontend, backend, and DevOps tools behind production SaaS, ERP, and e-commerce systems."
      className="!max-w-[1240px]"
    >
      <div className="relative mb-12 lg:mb-14">
        <div
          className="pointer-events-none absolute -bottom-2 -right-2 left-6 top-6 rounded-2xl border border-black/[0.07] bg-white/20"
          aria-hidden
        />
        <div className="editorial-card relative overflow-hidden p-6 shadow-[0_24px_60px_rgba(0,0,0,0.07)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-violet-400/12 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-800">
                  Flagship section
                </span>
              </div>
              <p className="mt-4 text-center font-jost text-xl font-semibold leading-snug tracking-tight text-gray-950 sm:text-2xl lg:text-left">
                Day to day I ship with{" "}
                <span className="text-emerald-800">React, Next.js, and NestJS</span>,
                and wire in{" "}
                <span className="text-violet-800">AI SDKs</span> where the product
                needs them.
              </p>
              <p className="mt-3 text-center text-sm leading-relaxed text-[var(--ed-muted)] lg:text-left">
                PostgreSQL and Prisma for data, Docker and GitHub Actions for
                delivery, Nginx and PM2 on VPS when a product stays on its own
                server.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 lg:flex-col lg:items-stretch lg:justify-center">
              <div className="rounded-xl border border-black/[0.08] bg-white/50 px-4 py-3 text-center backdrop-blur-sm lg:text-left">
                <p className="text-2xl font-bold tabular-nums text-gray-950">
                  {skillCategories.length}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ed-muted)]">
                  Categories
                </p>
              </div>
              <div className="rounded-xl border border-black/[0.08] bg-white/50 px-4 py-3 text-center backdrop-blur-sm lg:text-left">
                <p className="text-2xl font-bold tabular-nums text-gray-950">
                  {totalCount}+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ed-muted)]">
                  Tools &amp; tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-12 lg:mb-14">
        <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
            Full inventory — scrolls live
          </span>
        </div>
        <div className="editorial-card relative overflow-hidden py-5 shadow-[0_16px_48px_rgba(0,0,0,0.05)]">
          <div
            className="editorial-marquee-fade pointer-events-none absolute inset-0 z-[2]"
            aria-hidden
          />
          <div className="flex overflow-hidden">
            <div className="animate-editorial-marquee flex items-center whitespace-nowrap">
              {[...allSkills, ...allSkills].map((skill, idx) => (
                <div
                  key={`${skill.name}-${idx}`}
                  className="mx-2 inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-sm sm:mx-3"
                >
                  <span className="flex text-2xl sm:text-[1.65rem]">
                    {skill.icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-800">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:z-10 lg:self-start">
          <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
              Browse by lane
            </span>
          </div>
          <div
            className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-2"
            role="tablist"
            aria-label="Skill categories"
          >
            {skillCategories.map((cat, i) => {
              const active = activeTab === i;
              return (
                <button
                  key={cat.title}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(i)}
                  className={`flex w-full min-w-[140px] max-w-[220px] flex-col items-center rounded-2xl border px-4 py-3 text-left transition-all sm:max-w-none lg:max-w-none lg:flex-row lg:items-start lg:gap-3 lg:px-4 lg:py-4 ${
                    active
                      ? "border-gray-950 bg-gray-950 text-white shadow-lg shadow-black/15"
                      : "border-black/[0.08] bg-white/45 text-gray-900 backdrop-blur-sm hover:border-black/15 hover:bg-white/75"
                  }`}
                >
                  <span
                    className={`mb-2 h-2 w-2 shrink-0 rounded-full lg:mb-0 lg:mt-1.5 ${
                      active ? "bg-white" : "bg-gray-400"
                    }`}
                    aria-hidden
                  />
                  <span className="text-center lg:text-left">
                    <span className="block text-sm font-bold">{cat.title}</span>
                    <span
                      className={`mt-0.5 block text-[11px] leading-snug ${
                        active ? "text-white/75" : "text-[var(--ed-muted)]"
                      }`}
                    >
                      {cat.skills.length} items · {cat.blurb}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="min-w-0 lg:col-span-8">
          <div key={activeTab} role="tabpanel">
              <div className="mb-6 flex flex-col items-center gap-2 border-b border-black/[0.06] pb-6 sm:flex-row sm:justify-between sm:gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-950" />
                  <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">
                    {skillCategories[activeTab].title}
                  </h3>
                </div>
                <p className="max-w-md text-center text-sm leading-relaxed text-[var(--ed-muted)] sm:text-left">
                  {skillCategories[activeTab].blurb}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
                {skillCategories[activeTab].skills.map((skill, idx) => (
                  <SkillTile
                    key={`${activeTab}-${skill.name}`}
                    skill={skill}
                    index={idx}
                  />
                ))}
              </div>
          </div>
        </div>
      </div>
    </EditorialSection>
  );
};

export default EditorialSkills;
