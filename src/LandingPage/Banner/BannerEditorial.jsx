import { useId } from "react";
import { LuGithub } from "react-icons/lu";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import PDF from "../../assets/Junior_Software_Engineer_Fardus_Hassan .pdf";
import myimg from "../../assets/me.png";

const socials = [
  { href: "https://github.com/Fardus-Hassan", label: "GitHub", Icon: LuGithub },
  {
    href: "https://www.facebook.com/profile.php?id=100034957954013",
    label: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://www.linkedin.com/in/fardus-hassan",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "https://api.whatsapp.com/send/?phone=8801722092675&text&type=phone_number&app_absent=0",
    label: "WhatsApp",
    Icon: FaWhatsapp,
  },
];

const stackChips = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "TypeScript",
  "Tailwind",
];

/**
 * Hero — same editorial language as About / Contact: kicker, rule, editorial-card portrait, chips, CTAs.
 * Mobile: copy first, then portrait (hook before scroll). Desktop: copy | portrait | social rail.
 */
const BannerEditorial = () => {
  const pathId = useId().replace(/:/g, "");

  return (
    <section
      id="home"
      className="hero-editorial lg:mt-0 mt-10 relative z-[1] min-h-[100svh] scroll-mt-28 overflow-hidden bg-transparent pb-12 pt-[max(5rem,env(safe-area-inset-top)+4.25rem)] sm:pb-14 sm:pt-[max(5.75rem,env(safe-area-inset-top)+4.75rem)] lg:flex lg:min-h-[min(100svh,900px)] lg:items-center lg:pb-16 lg:pt-[max(6.25rem,env(safe-area-inset-top)+5rem)]"
    >
      <svg
        className="pointer-events-none absolute left-[-6%] top-[14%] z-[2] hidden h-[min(50vh,400px)] w-[min(38vw,260px)] text-gray-400/45 opacity-50 lg:block"
        viewBox="0 0 200 400"
        fill="none"
        aria-hidden
      >
        <path
          d="M 40 380 Q 100 120 160 380"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-[10%] right-[-4%] z-[2] hidden h-44 w-44 text-gray-400/40 opacity-45 lg:block"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden
      >
        <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="relative z-[3] mx-auto w-[92%] max-w-[1240px] sm:w-[90%]">
        <div
          className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-14"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          {/* Copy — first on mobile for immediate hook */}
          <div
            className="order-1 space-y-5 text-center sm:space-y-6 lg:order-none lg:col-span-6 lg:space-y-6 lg:text-left"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <p className="editorial-kicker !mt-0 text-emerald-800">Intro</p>
            </div>

            <h1 className="font-jost text-[clamp(2.35rem,6.5vw,3.85rem)] font-bold leading-[1.06] tracking-[-0.035em] text-gray-950">
              Fardus Hassan
            </h1>

            <p className="font-jost text-[11px] font-bold uppercase tracking-[0.28em] text-[#5c5a56] sm:text-xs sm:tracking-[0.32em]">
              Software Developer · MERN Stack
            </p>

            <div
              className="editorial-rule mx-auto max-w-[12rem] lg:mx-0"
              aria-hidden
            />

            <p className="mx-auto max-w-xl font-jost text-lg font-semibold leading-snug tracking-tight text-gray-950 sm:text-xl lg:mx-0 lg:max-w-lg">
              I ship{" "}
              <span className="text-emerald-800">responsive web apps &amp; ERP</span>{" "}
              with React — performance, accessibility, and UI clarity first.
            </p>

            <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-[#5c5a56] sm:text-base lg:mx-0">
              Front-end and full-stack work for institutes and product teams — from
              first prototype to stable releases in production.
            </p>

            <div
              className="flex gap-3 flex-row flex-wrap items-center lg:justify-start justify-center"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-gray-950 px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/12 transition-all hover:bg-gray-900 active:scale-[0.99]"
              >
                View work
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/[0.12] bg-white/55 px-6 py-2.5 text-sm font-semibold text-gray-900 backdrop-blur-sm transition-colors hover:border-black/20 hover:bg-white/85"
              >
                Contact me
              </a>
              <a
                href={PDF}
                download="Fardus_Hassan_Resume"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/[0.1] px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-black/18 hover:bg-black/[0.03]"
              >
                <MdFileDownload className="text-lg" aria-hidden />
                Resume
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-1 lg:justify-start">
              {stackChips.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/[0.08] bg-white/50 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div
            className="group relative order-2 mx-auto w-full max-w-[420px] lg:order-none lg:col-span-5 lg:mx-0 lg:max-w-none"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <div
              className="pointer-events-none absolute -bottom-3 -right-3 left-5 top-5 rounded-2xl border border-black/[0.07] bg-white/25 sm:left-7 sm:top-7"
              aria-hidden
            />
            <div className="editorial-card relative overflow-hidden p-2.5 shadow-[0_28px_72px_rgba(0,0,0,0.1)] sm:p-3">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-400/18 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-violet-400/14 blur-3xl" />

              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={myimg}
                  alt="Fardus Hassan"
                  className="aspect-[3/3.65] w-full object-cover object-top grayscale transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0 sm:aspect-[3/3.55]"
                />
              </div>

              <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-gray-800 shadow-sm backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:text-[10px] sm:tracking-[0.2em]">
                Portrait
              </div>

              <div className="pointer-events-none absolute bottom-3 right-3 max-w-[9.5rem] rounded-lg border border-black/[0.06] bg-white/80 px-2.5 py-2 text-left shadow-md backdrop-blur-md sm:bottom-4 sm:right-4 sm:max-w-[11rem] sm:px-3 sm:py-2.5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-800 sm:text-[10px]">
                  Based in
                </p>
                <p className="mt-0.5 text-xs font-bold text-gray-950 sm:text-sm">
                  Gazipur, Bangladesh
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="editorial-glass absolute -right-1 top-[8%] z-[4] flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-full shadow-lg transition-[transform,box-shadow] duration-300 hover:scale-105 hover:shadow-xl active:scale-[0.98] sm:h-24 sm:w-24 lg:right-0 lg:top-[14%] lg:h-28 lg:w-28"
              aria-label="Go to contact"
              data-aos="fade"
              data-aos-delay="120"
            >
              <div className="banner-circle-text-spin flex h-full w-full items-center justify-center">
                <svg
                  className="block h-full w-full"
                  viewBox="0 0 200 200"
                  aria-hidden
                >
                  <defs>
                    <path
                      id={`circleText-${pathId}`}
                      d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                      fill="none"
                    />
                  </defs>
                  <text className="fill-gray-800 font-jost text-[11px] font-semibold uppercase tracking-[0.28em] sm:text-[13px] sm:tracking-[0.32em]">
                    <textPath href={`#circleText-${pathId}`} startOffset="0%">
                      Let&apos;s talk • Reach out • Let&apos;s talk • Reach out •{" "}
                    </textPath>
                  </text>
                </svg>
              </div>
            </a>
          </div>

          {/* Desktop social rail */}
          <div
            className="order-3 hidden flex-col items-center justify-center gap-6 lg:order-none lg:col-span-1 lg:flex"
            data-aos="fade-up"
            data-aos-delay="190"
          >
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-xl border border-transparent p-2 text-gray-500 transition-all hover:border-black/[0.08] hover:bg-white/40 hover:text-gray-950"
                data-aos="zoom-in"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile / tablet socials */}
        <div
          className="mt-10 border-t border-black/[0.08] pt-8 lg:hidden"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#5c5a56]">
            Connect
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.08] bg-white/50 text-gray-700 backdrop-blur-sm transition-colors hover:border-black/15 hover:bg-white/80 hover:text-gray-950"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerEditorial;
