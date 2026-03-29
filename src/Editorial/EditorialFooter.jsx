import { SectionReveal } from "../Components/SectionReveal";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { href: "https://github.com/Fardus-Hassan", label: "GitHub", icon: FaGithub },
  {
    href: "https://www.facebook.com/profile.php?id=100034957954013",
    label: "Facebook",
    icon: FaFacebook,
  },
  {
    href: "https://www.linkedin.com/in/fardus-hassan",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://api.whatsapp.com/send/?phone=8801722092675&text&type=phone_number&app_absent=0",
    label: "WhatsApp",
    icon: IoLogoWhatsapp,
    iconClass: "text-[22px]",
  },
];

const stackChips = ["React", "Tailwind", "Vite"];

const EditorialFooter = () => {
  return (
    <SectionReveal
      as="footer"
      className="editorial-section relative z-[1] !max-w-[1240px] !pb-12 !pt-10 lg:!pb-16 lg:!pt-12"
    >
      <div
        className="pointer-events-none mx-auto mb-8 h-px max-w-2xl bg-gradient-to-r from-transparent via-black/[0.1] to-transparent lg:mb-10 lg:ml-0"
        aria-hidden
      />

      <div className="relative">
        <div
          className="pointer-events-none absolute -bottom-2 -right-2 left-6 top-6 hidden rounded-2xl border border-black/[0.07] bg-white/20 lg:block"
          aria-hidden
        />
        <div className="editorial-card relative grid gap-10 overflow-hidden p-8 shadow-[0_24px_60px_rgba(0,0,0,0.07)] lg:grid-cols-12 lg:gap-12 lg:p-10">
          <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-10 h-44 w-44 rounded-full bg-violet-400/12 blur-3xl" />

          <div className="relative text-center lg:col-span-5 lg:text-left">
            {/* <div className="mb-3 flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-800">
                Fardus Hassan
              </span>
            </div> */}
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-gray-950 md:text-3xl"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
              &lt;Fardus/&gt;
            </a>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-[var(--ed-muted)] lg:mx-0">
              Front-end &amp; MERN developer — web apps, ERP, and polished UI with
              React and modern tooling.
            </p>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
              Social
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
              {socials.map(({ href, label, icon: Icon, iconClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-white/50 text-gray-800 backdrop-blur-sm transition-colors hover:border-black/15 hover:bg-white/80"
                >
                  <Icon className={`text-lg ${iconClass ?? ""}`} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative text-center lg:col-span-4 lg:text-left">
            <div className="mb-1 flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                Navigate
              </p>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm font-semibold text-gray-800 transition-colors hover:text-gray-950"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative text-center lg:col-span-3 lg:text-left">
            <div className="mb-1 flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                Let&apos;s talk
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--ed-muted)]">
              Open to freelance, collaborations, and full-time roles.
            </p>
            <div className="flex flex-wrap sm:justify-start justify-center items-center gap-2">
            <a
              href="mailto:fardus.dev@gmail.com"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-950 py-3 text-xs font-semibold text-white shadow-lg shadow-black/10 transition-all hover:bg-gray-900 sm:w-auto sm:px-5"
            >
              <HiOutlineMail className="text-base" aria-hidden />
              Email me
            </a>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-gray-800 transition-colors hover:text-gray-950 lg:justify-start"
            >
              Contact form
              <FaArrowUpRightFromSquare className="text-xs opacity-70" aria-hidden />
            </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-[var(--ed-muted)]">
          © {new Date().getFullYear()} Fardus Hassan. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ed-muted)] sm:mr-1">
            Built with
          </span>
          {stackChips.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/[0.08] bg-white/50 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
};

export default EditorialFooter;
