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
  {
    href: "https://github.com/Fardus-Hassan",
    label: "GitHub",
    icon: FaGithub,
  },
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

const Footer = () => {
  return (
    <footer className="font-jost relative mt-4 overflow-hidden border-t border-gray-200/80">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(88,70,242,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative xl:container w-[90%] mx-auto pt-14 pb-8 lg:pt-16 lg:pb-10">
        <div className="grid gap-12 lg:gap-10 lg:grid-cols-12 lg:items-start">
          {/* Brand */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <a
              href="#home"
              className="inline-block gradient-color md:text-4xl text-3xl jost-bold"
            >
              &lt;
              <span className="md:text-3xl text-2xl font-black">Fardus</span>
              <span className="font-bold">/</span>&gt;
            </a>
            <p className="mt-4 max-w-md mx-auto lg:mx-0 text-gray-600 text-[15px] leading-relaxed">
              Front-end &amp; MERN stack developer building responsive web apps,
              ERP products, and polished UI with React, Redux, and modern tooling.
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              {socials.map(({ href, label, icon: Icon, iconClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200/90 bg-white/80 text-secColor shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-secColor/30 hover:bg-white hover:text-pmColor hover:shadow-md hover:-translate-y-0.5"
                >
                  <Icon
                    className={`text-xl transition-transform duration-300 group-hover:scale-110 ${iconClass ?? ""}`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">
              Navigate
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-x-6 gap-y-3 max-w-sm mx-auto lg:mx-0">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[15px] font-semibold text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-secColor hover:to-pmColor transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {label}
                    <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secColor text-xs">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">
              Let&apos;s talk
            </h3>
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Open to freelance, collaborations, and full-time roles. Drop a
              message—I usually reply within a day.
            </p>
          <div className="flex flex-col gap-2">
          <a
              href="mailto:fardus.dev@gmail.com"
              className="inline-flex items-center text-xs justify-center gap-2 rounded-xl bg-secColor p-3 font-semibold text-white shadow-lg shadow-secColor/25 transition-all duration-300 hover:bg-gradient-to-r hover:from-secColor hover:to-pmColor hover:shadow-pmColor/20 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <HiOutlineMail className="text-lg" />
              fardus.dev@gmail.com
            </a>
            <a
              href="#contact"
              className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-secColor hover:text-pmColor transition-colors w-full sm:w-auto"
            >
              Contact form
              <FaArrowUpRightFromSquare className="text-xs opacity-70" />
            </a>
          </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-14 h-px w-full bg-gradient-to-r from-transparent via-gray-300/80 to-transparent" />

        <div className="mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Fardus Hassan. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 tracking-wide">
            Crafted with React · Tailwind CSS · Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
