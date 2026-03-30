import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import EditorialSection from "./EditorialSection";

const quickLinks = [
  { label: "Email", href: "mailto:fardus.dev@gmail.com" },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=8801722092675&text&type=phone_number&app_absent=0" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fardus-hassan" },
];

const EditorialContact = () => {
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setError("");
    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      reset();
      toast.success("Message sent successfully!");
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
      toast.error("Failed to send message!");
    } finally {
      setSending(false);
    }
  };

  return (
    <EditorialSection
      id="contact"
      kicker="Contact"
      title="Let’s build something"
      subtitle="Freelance, collaborations, or full-time roles — I read every message and usually reply within a day."
      className="!max-w-[1240px]"
    >
      <div
        className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14"
        data-aos="fade-up"
        data-aos-delay="80"
      >
        {/* Left: narrative + contact cards */}
        <div
          className="mx-auto w-full max-w-lg space-y-8 lg:col-span-5 lg:mx-0"
          data-aos="fade-right"
          data-aos-delay="130"
        >
          <div className="relative" data-aos="fade-up" data-aos-delay="170">
            <div
              className="pointer-events-none absolute -bottom-3 -right-3 left-6 top-6 rounded-2xl border border-black/[0.07] bg-white/20"
              aria-hidden
            />
            <div className="editorial-card relative overflow-hidden p-6 shadow-[0_24px_60px_rgba(0,0,0,0.07)] sm:p-8">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-800">
                Direct line
              </p>
              <p className="mt-4 text-center font-jost text-xl font-semibold leading-snug tracking-tight text-gray-950 sm:text-2xl lg:text-left">
                Tell me about your{" "}
                <span className="text-emerald-800">product, timeline, and goals</span>
                — I’ll follow up with next steps.
              </p>
              <div className="pointer-events-none absolute right-5 top-5 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-gray-700 shadow-sm backdrop-blur-sm">
                Open inbox
              </div>
            </div>
          </div>

          <p
            className="text-center text-sm leading-relaxed text-[var(--ed-muted)] lg:text-left"
            data-aos="fade-up"
            data-aos-delay="240"
          >
            Prefer another channel? Use the links below — same person, faster
            threads on WhatsApp for quick questions.
          </p>

          <div className="grid gap-4 sm:grid-cols-1" data-aos="fade-up" data-aos-delay="260">
            <a
              href="tel:+8801722092675"
              className="editorial-card group flex gap-4 p-5 text-left transition-shadow hover:shadow-lg sm:p-6"
              data-aos="fade-up"
              data-aos-delay="280"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-white/60 text-gray-800 transition-colors group-hover:border-emerald-500/30 group-hover:text-emerald-800">
                <HiOutlinePhone className="text-xl" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                    Phone
                  </span>
                </div>
                <p className="font-semibold text-gray-950">+880 1722092675</p>
                <p className="mt-1 text-xs text-[var(--ed-muted)]">Tap to call</p>
              </div>
            </a>

            <a
              href="mailto:fardus.dev@gmail.com"
              className="editorial-card group flex gap-4 p-5 text-left transition-shadow hover:shadow-lg sm:p-6"
              data-aos="fade-up"
              data-aos-delay="320"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-white/60 text-gray-800 transition-colors group-hover:border-violet-500/30 group-hover:text-violet-800">
                <HiOutlineMail className="text-xl" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                    Email
                  </span>
                </div>
                <p className="break-all font-semibold text-gray-950">
                  fardus.dev@gmail.com
                </p>
                <p className="mt-1 text-xs text-[var(--ed-muted)]">Opens your mail app</p>
              </div>
            </a>

            <div
              className="editorial-card flex gap-4 p-5 sm:p-6"
              data-aos="fade-up"
              data-aos-delay="360"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-white/60 text-gray-800">
                <HiOutlineLocationMarker className="text-xl" aria-hidden />
              </span>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                    Location
                  </span>
                </div>
                <p className="font-semibold text-gray-950">
                  Gazipur District, Dhaka, Bangladesh
                </p>
                <p className="mt-1 text-xs text-[var(--ed-muted)]">
                  Remote-friendly · Joydebpur, Gazipur
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex flex-wrap justify-center gap-2 lg:justify-start"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {quickLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-full border border-black/[0.08] bg-white/50 px-3 py-1.5 text-xs font-semibold text-gray-800 backdrop-blur-sm transition-colors hover:border-black/15 hover:bg-white/80"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: form — sticky on large screens while left column scrolls */}
        <div
          className="lg:col-span-7 lg:sticky lg:top-28 lg:z-10 lg:self-start"
          data-aos="fade-left"
          data-aos-delay="210"
        >
          <form
            className="editorial-card relative overflow-hidden p-6 shadow-[0_24px_60px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10"
            onSubmit={handleSubmit(onSubmit)}
            data-aos="fade-up"
            data-aos-delay="260"
          >
            <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-violet-400/10 blur-3xl" />
            <div className="relative">
              <div
                className="mb-6 flex items-center gap-2 border-b border-black/[0.06] pb-6"
                data-aos="fade-up"
                data-aos-delay="290"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ed-muted)]">
                  Send a message
                </h3>
              </div>
              <p
                className="mb-8 text-sm leading-relaxed text-[var(--ed-muted)]"
                data-aos="fade-up"
                data-aos-delay="320"
              >
                Use the form for project details, attachments in follow-up, or
                anything you don’t want to lose in chat.
              </p>

              <div
                className="grid gap-4 sm:grid-cols-2"
                data-aos="fade-up"
                data-aos-delay="340"
              >
                <div data-aos="fade-right" data-aos-delay="370">
                  <label
                    className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ed-muted)]"
                    htmlFor="ed-name"
                  >
                    Name
                  </label>
                  <input
                    id="ed-name"
                    {...register("name", { required: "Required" })}
                    className="editorial-input"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div data-aos="fade-right" data-aos-delay="420">
                  <label
                    className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ed-muted)]"
                    htmlFor="ed-email"
                  >
                    Email
                  </label>
                  <input
                    id="ed-email"
                    type="email"
                    {...register("email", {
                      required: "Required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                    })}
                    className="editorial-input"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="mt-4" data-aos="fade-up" data-aos-delay="460">
                <label
                  className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ed-muted)]"
                  htmlFor="ed-subject"
                >
                  Subject
                </label>
                <input
                  id="ed-subject"
                  {...register("subject", { required: "Required" })}
                  className="editorial-input"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
                )}
              </div>
              <div className="mt-4" data-aos="fade-up" data-aos-delay="510">
                <label
                  className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ed-muted)]"
                  htmlFor="ed-message"
                >
                  Message
                </label>
                <textarea
                  id="ed-message"
                  rows={5}
                  {...register("message", { required: "Required" })}
                  className="editorial-input resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                )}
                {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-8 w-full rounded-full bg-gray-950 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-12"
                data-aos="zoom-in"
                data-aos-delay="560"
              >
                {sending ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </EditorialSection>
  );
};

export default EditorialContact;
