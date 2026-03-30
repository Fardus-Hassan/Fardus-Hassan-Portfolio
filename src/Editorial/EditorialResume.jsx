/* eslint-disable react/prop-types -- internal resume card helpers */
import { m } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdFileDownload } from "react-icons/md";
import { EASE_SECTION } from "../Components/SectionReveal";
import PDF from "../assets/Junior_Software_Engineer_Fardus_Hassan .pdf";
import EditorialSection from "./EditorialSection";
import {
  editorialCourses,
  editorialEducation,
  editorialExperiences,
} from "./data/resumeData";

const resumeStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_SECTION },
  },
};

function MetaRow({ label, children }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
      <span className="pt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ed-muted)]">
        {label}
      </span>
      <div className="font-semibold leading-snug text-gray-900">{children}</div>
    </div>
  );
}

function ExperienceCard({ job, index }) {
  const accent = index % 2 === 0 ? "emerald" : "violet";
  const dotClass =
    accent === "emerald" ? "bg-emerald-500" : "bg-violet-500";
  const kickerClass =
    accent === "emerald" ? "text-emerald-800" : "text-violet-800";

  return (
    <m.article
      variants={fadeUp}
      className="editorial-card relative overflow-hidden p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:p-8"
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl ${
          accent === "emerald" ? "bg-emerald-400/12" : "bg-violet-400/12"
        }`}
      />
      <div className="relative">
        <div className="flex flex-col gap-4 border-b border-black/[0.06] pb-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0 space-y-2">
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`} />
              <span
                className={`text-[10px] font-bold uppercase tracking-[0.22em] ${kickerClass}`}
              >
                Role {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-xl font-bold leading-tight text-gray-950 sm:text-2xl">
              {job.company}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--ed-muted)] sm:text-[15px]">
              {job.tagline}
            </p>
          </div>
          <span className="shrink-0 self-start rounded-full border border-black/[0.08] bg-white/60 px-3.5 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur-sm">
            {job.dates}
          </span>
        </div>

        <div className="relative mt-6 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="rounded-xl border border-black/[0.06] bg-white/40 p-5 lg:col-span-5">
            <div className="mb-3 flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                At a glance
              </span>
            </div>
            <div className="space-y-3">
              <MetaRow label="Role">{job.position}</MetaRow>
              <MetaRow label="Place">{job.location}</MetaRow>
              <MetaRow label="Field">{job.industry}</MetaRow>
              {job.website ? (
                <MetaRow label="Web">
                  <a
                    href={job.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-gray-900 underline-offset-4 hover:underline"
                  >
                    {job.website.replace(/^https?:\/\/(www\.)?/, "")}
                    <FaArrowUpRightFromSquare className="text-xs opacity-60" />
                  </a>
                </MetaRow>
              ) : null}
            </div>
          </div>

          <div className="space-y-4 text-[15px] leading-relaxed lg:col-span-7 lg:text-base">
            <p className="font-medium text-gray-800">{job.context}</p>
            <ul className="space-y-3">
              {job.bullets.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`}
                    aria-hidden
                  />
                  <span className="text-[var(--ed-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </m.article>
  );
}

function CourseCard({ course, index }) {
  return (
    <m.article
      variants={fadeUp}
      className="editorial-card relative h-full overflow-hidden p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] sm:p-8"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
      <div className="relative mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700">
          Course {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-sm font-semibold text-[var(--ed-muted)]">
          {course.period}
        </span>
      </div>
      <h3 className="relative mb-3 text-lg font-bold leading-snug text-gray-950 sm:text-xl">
        {course.title}
      </h3>
      <p className="relative mb-3 text-sm text-[var(--ed-muted)]">
        {course.provider}
        {course.certificateUrl ? (
          <>
            {" "}
            —{" "}
            <a
              href={course.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-900 underline underline-offset-2"
            >
              {course.certificateLabel}
            </a>
          </>
        ) : (
          <span className="text-gray-400"> · {course.certificateLabel}</span>
        )}
      </p>
      <p className="relative leading-relaxed text-[var(--ed-muted)]">
        {course.summary}
      </p>
    </m.article>
  );
}

const EditorialResume = () => {
  return (
    <div id="resume" className="scroll-mt-28">
      <EditorialSection
        id="experience"
        kicker="Experience"
        title="Where I shipped software"
        subtitle="Production apps, ERP for institutes, and ongoing support after launch — from first demo to stable releases."
        className="!max-w-[1240px]"
      >
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <m.div
            className="mx-auto w-full max-w-lg space-y-6 lg:sticky lg:top-28 lg:z-10 lg:col-span-5 lg:mx-0 lg:self-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={resumeStagger}
          >
            <m.div variants={fadeUp} className="relative">
              <div
                className="pointer-events-none absolute -bottom-3 -right-3 left-6 top-6 rounded-2xl border border-black/[0.07] bg-white/20"
                aria-hidden
              />
              <div className="editorial-card relative overflow-hidden p-6 shadow-[0_24px_60px_rgba(0,0,0,0.07)] sm:p-8">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-400/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-violet-800">
                  On the record
                </p>
                <p className="mt-4 text-center font-jost text-xl font-semibold leading-snug tracking-tight text-gray-950 sm:text-2xl lg:text-left">
                  A concise{" "}
                  <span className="text-emerald-800">timeline of roles</span>{" "}
                  — same story as the PDF, formatted for the web.
                </p>
                <div className="pointer-events-none absolute right-5 top-5 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-gray-700 shadow-sm backdrop-blur-sm">
                  PDF ready
                </div>
                <a
                  href={PDF}
                  download="Fardus_Hassan_Resume"
                  className="relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/[0.1] bg-gray-950 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all hover:bg-gray-900 sm:w-auto sm:px-8"
                >
                  <MdFileDownload className="text-lg" aria-hidden />
                  Download resume
                </a>
              </div>
            </m.div>

            <m.div
              variants={fadeUp}
              className="editorial-card flex items-start gap-4 p-5 sm:p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-white/60 text-gray-800">
                <HiOutlineDocumentText className="text-xl" aria-hidden />
              </span>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                    Snapshot
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-950">
                  {editorialExperiences.length} roles · Courses &amp; formal
                  training below
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--ed-muted)]">
                  Scroll for narrative detail, or grab the PDF for recruiters
                  and ATS-friendly formatting.
                </p>
              </div>
            </m.div>
          </m.div>

          <m.div
            className="space-y-6 lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={resumeStagger}
          >
            {editorialExperiences.map((job, i) => (
              <ExperienceCard key={job.company} job={job} index={i} />
            ))}
          </m.div>
        </div>
      </EditorialSection>

      <EditorialSection
        id="courses"
        kicker="Courses"
        title="Structured learning"
        subtitle="Programs that accelerated the move from engineering into professional web development."
        className="!max-w-[1240px] !pt-12 lg:!pt-16"
        delay={0.04}
      >
        <m.div
          className="grid gap-6 md:grid-cols-2 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={resumeStagger}
        >
          {editorialCourses.map((course, i) => (
            <CourseCard key={course.title} course={course} index={i} />
          ))}
        </m.div>
      </EditorialSection>

      <EditorialSection
        id="education"
        kicker="Education"
        title="Formal training"
        subtitle="Technical foundation before focusing fully on software."
        className="!max-w-[1240px] !pt-12 lg:!pt-16"
        delay={0.06}
      >
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="editorial-card relative overflow-hidden p-8 shadow-[0_24px_60px_rgba(0,0,0,0.06)] sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-violet-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 top-12 h-40 w-40 rounded-full bg-emerald-400/8 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-4 lg:col-span-5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                  Degree
                </span>
              </div>
              <h3 className="text-2xl font-bold leading-tight text-gray-950 sm:text-[1.65rem]">
                {editorialEducation.degree}
              </h3>
              <p className="text-sm font-semibold tracking-wide text-[var(--ed-muted)]">
                {editorialEducation.period}
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {editorialEducation.institution}
              </p>
            </div>
            <div className="lg:col-span-7 lg:border-l lg:border-black/[0.06] lg:pl-10">
              <p className="leading-relaxed text-[var(--ed-muted)] lg:text-lg">
                {editorialEducation.summary}
              </p>
            </div>
          </div>
        </m.div>
      </EditorialSection>
    </div>
  );
};

export default EditorialResume;
