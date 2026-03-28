/* eslint-disable react/prop-types -- section helpers are internal; data is static */
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SectionReveal } from "../../Components/SectionReveal";

const experiences = [
  {
    company: "Freelance Hub BD Ltd",
    tagline: "ERP and institutional software for schools & madrasahs across Bangladesh.",
    dates: "Mar 2024 — Present",
    position: "Frontend Engineer",
    location: "Mirpur-11, Rd No 3, Dhaka 1216, Bangladesh",
    industry: "EdTech · ERP",
    website: null,
    context:
      "Building end-to-end products with institute stakeholders, from first demo to ongoing support after go-live.",
    bullets: [
      <>
        Developed multiple comprehensive <strong>ERP-based</strong> products using{" "}
        <strong>React.js & Redux</strong>, working closely with Django backend
        developers.
      </>,
      "Deployed solutions across various institutions and kept releases stable in production.",
      "Designed and delivered fully responsive school and madrasah websites tailored to each client.",
      "Ran training and onboarding sessions so staff could adopt new systems confidently.",
      "Provided ongoing support, proactive maintenance, and upgrades for smooth day-to-day operations.",
    ],
  },
  {
    company: "Eclipse Intellitech Limited",
    tagline: "POS, e-commerce, and business software delivered with a product-focused team.",
    dates: "Sep 2023 — Feb 2024",
    position: "MERN Stack Developer",
    location: "House 41, Block E, Road-06, Banasree, Dhaka, Bangladesh",
    industry: "Software · Commerce",
    website: null,
    context:
      "Contributed across the stack on customer-facing apps, pairing with backend and design to ship reliable features.",
    bullets: [
      "Built POS software with robust functionality using React.js and Redux.",
      "Developed scalable e-commerce experiences with performance and reliability in mind.",
      "Collaborated with Laravel backend developers to integrate APIs cleanly.",
      "Delivered dynamic, high-quality features aligned with business goals.",
      "Worked closely with designers to keep UI/UX consistent and intuitive.",
    ],
  },
];

const courses = [
  {
    title: "Complete Web Development Course With Jhankar Mahbub",
    period: "Jan 2024 — Jun 2024",
    provider: "Programming Hero",
    certificateLabel: "Certificate",
    certificateUrl: null,
    summary:
      "Strong focus on front-end development and full-stack project implementation, from fundamentals to shipping real projects.",
  },
  {
    title:
      "Complete Web Design Live Course: HTML, CSS, Javascript and jQuery",
    period: "Apr 2023 — Aug 2023",
    provider: "Eshikhon",
    certificateLabel: "Certificate",
    certificateUrl: null,
    summary:
      "Pixel-perfect layout and strong foundations in HTML, CSS, JavaScript, and jQuery for responsive interfaces.",
  },
];

const education = {
  degree: "Diploma in Mechanical Engineering",
  period: "2022 — 2025",
  institution: "Model Institute of Science and Technology (MIST)",
  summary:
    "Hands-on training in workshop practices and industrial technology, with practical exposure to mechanical design, manufacturing, and maintenance — complementing a self-driven path into software engineering.",
};

function SectionIntro({ kicker, headline, subline }) {
  return (
    <header className="mb-12 lg:mb-16">
      <p className="font-bold font-jost lg:text-xl gradient-color">{kicker}</p>
      <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:gap-6 gap-3">
        <h2 className="text-2xl lg:text-[44px] text-[30px] font-bold font-jost uppercase tracking-[0.12em] text-gray-900 leading-tight">
          {headline}
        </h2>
        <div
          className="sm:flex-1 w-full h-px sm:mb-3 bg-gradient-to-r from-secColor via-pmColor to-transparent opacity-80"
          aria-hidden
        />
      </div>
      {subline ? (
        <p className="mt-4 max-w-2xl text-gray-600 font-jost text-base lg:text-lg">
          {subline}
        </p>
      ) : null}
    </header>
  );
}

function MetaRow({ label, children }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm font-jost">
      <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold pt-0.5">
        {label}
      </span>
      <div className="text-gray-800 font-medium leading-snug">{children}</div>
    </div>
  );
}

function ExperienceCard({ job }) {
  return (
    <article className="group relative border-b border-gray-100 pb-12 lg:pb-16 last:border-0 last:pb-0">
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-secColor to-pmColor opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-3 hidden lg:block" />
      <h3 className="text-xl sm:text-2xl font-bold font-jost text-gray-900 mb-8 lg:mb-10">
        {job.company}
      </h3>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">
        <div className="lg:col-span-3 space-y-4">
          <p className="text-gray-600 font-jost leading-relaxed text-[15px] lg:text-base">
            {job.tagline}
          </p>
          <p className="text-gray-900 font-semibold font-jost text-sm tracking-wide">
            {job.dates}
          </p>
        </div>

        <div className="liquid-glass lg:col-span-4 space-y-4 p-5 rounded-2xl">
          <MetaRow label="Position">{job.position}</MetaRow>
          <MetaRow label="Location">{job.location}</MetaRow>
          <MetaRow label="Industry">{job.industry}</MetaRow>
          {job.website ? (
            <MetaRow label="Website">
              <a
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-secColor hover:text-pmColor transition-colors underline-offset-4 hover:underline"
              >
                {job.website.replace(/^https?:\/\/(www\.)?/, "")}
                <FaArrowUpRightFromSquare className="text-xs opacity-70" />
              </a>
            </MetaRow>
          ) : null}
        </div>

        <div className="lg:col-span-5 space-y-5 font-jost text-[15px] lg:text-base leading-relaxed text-gray-700">
          <p>{job.context}</p>
          <ul className="space-y-3 list-none">
            {job.bullets.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-secColor to-pmColor"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function CourseCard({ course, index }) {
  return (
    <article className="liquid-glass relative overflow-hidden rounded-2xl p-6 sm:p-8">
      <div className="liquid-glass-bg top-0 right-0 w-32 h-32 bg-gradient-to-br from-secColor/10 to-pmColor/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
      <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secColor">
          Course {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
          {course.period}
        </span>
      </div>
      <h3 className="relative text-lg sm:text-xl font-bold font-jost text-gray-900 leading-snug mb-3">
        {course.title}
      </h3>
      <p className="relative text-sm text-gray-500 font-jost mb-4">
        {course.provider}
        {course.certificateUrl ? (
          <>
            {" "}
            —{" "}
            <a
              href={course.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secColor hover:text-pmColor underline underline-offset-2 font-semibold"
            >
              {course.certificateLabel}
            </a>
          </>
        ) : (
          <span className="text-gray-400"> · {course.certificateLabel}</span>
        )}
      </p>
      <p className="relative text-gray-600 font-jost leading-relaxed">
        {course.summary}
      </p>
    </article>
  );
}

const Resume = () => {
  return (
    <div id="resume" className="xl:w-[95%] mx-auto scroll-mt-28">
      <div className="xl:container w-[90%] mx-auto lg:mb-[150px] sm:mb-[100px] mb-20">
        {/* Experience */}
        <SectionReveal as="section" id="experience" className="scroll-mt-28">
          <SectionIntro
            kicker="<Experience/>"
            headline="Experience"
            subline="Roles where I shipped production software, collaborated across disciplines, and supported users after launch."
          />
          <div className="space-y-4">
            {experiences.map((job) => (
              <ExperienceCard key={job.company} job={job} />
            ))}
          </div>
        </SectionReveal>

        {/* Courses */}
        <SectionReveal
          as="section"
          id="courses"
          className="mt-20 lg:mt-28 scroll-mt-28"
          delay={0.04}
        >
          <SectionIntro
            kicker="<Courses/>"
            headline="Courses"
            subline="Structured programs that accelerated my move from engineering background into professional web development."
          />
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {courses.map((course, i) => (
              <CourseCard key={course.title} course={course} index={i} />
            ))}
          </div>
        </SectionReveal>

        {/* Education */}
        <SectionReveal
          as="section"
          id="education"
          className="mt-20 lg:mt-28 scroll-mt-28"
          delay={0.06}
        >
          <SectionIntro
            kicker="<Education/>"
            headline="Education"
            subline="Formal technical training that sharpened problem-solving and hands-on execution before I focused on software."
          />
          <div className="liquid-glass relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12">
            <div className="liquid-glass-bg -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-tr from-pmColor/15 to-secColor/15 blur-3xl" />
            <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-2xl font-bold font-jost text-gray-900 leading-tight">
                  {education.degree}
                </h3>
                <p className="text-sm font-semibold text-gray-500 tracking-wide">
                  {education.period}
                </p>
                <p className="text-lg font-jost font-semibold text-secColor">
                  {education.institution}
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="font-jost text-gray-600 leading-relaxed text-base lg:text-lg">
                  {education.summary}
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default Resume;
