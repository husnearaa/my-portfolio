// Stack: Next.js + Tailwind CSS + HeroUI + EmailJS

"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import type { FormEvent, ChangeEvent } from "react";

const EMAILJS_SERVICE_ID = "service_8u93txt";
const EMAILJS_TEMPLATE_ID = "template_6bam81u";
const EMAILJS_PUBLIC_KEY = "8u-v09K3qT4LQvVWX";

const contactInfo = [
  {
    label: "Email",
    value: "hosnearapopy462@gmail.com",
    href: "mailto:hosnearapopy@gmail.com",
    icon: "✉",
    note: "Reply within 24hrs",
    color: "#ffffff",
  },
  {
    label: "WhatsApp",
    value: "+880 129270655",
    href: "https://wa.me/8801683367535",
    icon: "💬",
    note: "Reply within 1–3hrs",
    color: "#ffffff",
  },
  {
    label: "LinkedIn",
    value: "Hosneara Popy",
    href: "https://www.linkedin.com/in/hosneara-popy/",
    icon: "◈",
    note: "Let's connect",
    color: "#ffffff",
  },
  //   {
  //     label: "Facebook",
  //     value: "hosneara",
  //     href: "https://www.facebook.com/hosneara",
  //     icon: "◉",
  //     note: "Say hello",
  //     color: "#1877F2",
  //   },
];

const availability = [
  { label: "Full-time", active: true },
  { label: "Freelance", active: true },
  { label: "Intern", active: true },
];

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };
  return (
    <section id="contact" className=" py-24 px-6 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          {/* <span className="font-mono text-white text-sm">›_</span> */}
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            contact.me
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Heading */}
        <div className="w-11/12 mx-auto mb-14">
          <h2 className="font-mono text-3xl md:text-4xl font-black text-white">
            Have a Project <span className="text-white/60">in Mind?</span>
          </h2>
          <p className="font-mono text-sm text-[#8a9a8e] mt-2">
            Let&apos;s talk about your next idea.
          </p>
        </div>

        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ── LEFT: Info ── */}
          <div className="flex flex-col gap-6">
            {/* Availability */}
            <div className="p-4 rounded-sm border border-white/15 bg-[#00E676]/3 backdrop-blur-[1.5px]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="font-mono text-xs text-white/70 tracking-widest uppercase">
                  currently available for
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {availability.map((item) => (
                  <span
                    key={item.label}
                    className="font-mono text-xs px-3 py-1 rounded-sm border border-white/25 text-white bg-white/08"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 px-1 ">
              <span className="text-white/60 text-sm">◎</span>
              <span className="font-mono text-sm text-[#8a9a8e]">
                Dhaka, Bangladesh
              </span>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-sm border transition-all duration-300 hover:translate-x-1 backdrop-blur-[1.5px]"
                  style={{
                    borderColor: `${item.color}15`,
                    background: `${item.color}05`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}40`;
                    e.currentTarget.style.background = `${item.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}15`;
                    e.currentTarget.style.background = `${item.color}05`;
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 text-base"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}25`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] text-[#8a9a8e]/50 uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p
                      className="font-mono text-sm font-semibold truncate"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </p>
                  </div>

                  {/* Note */}
                  <span className="font-mono text-[10px] text-[#8a9a8e]/40 shrink-0 hidden sm:block">
                    {item.note}
                  </span>

                  {/* Arrow */}
                  <span
                    className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    style={{ color: item.color }}
                  >
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-white/50 tracking-widest uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Write your name"
                  className="w-full bg-[#1a1a18] border border-white/15 rounded-sm px-4 py-3 font-mono text-sm text-white placeholder:text-[#8a9a8e]/30 backdrop-blur-[1.5px] focus:outline-none focus:border-white/50 transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-white/50 tracking-widest uppercase">
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full backdrop-blur-[1.5px] bg-[#1a1a18] border border-white/15 rounded-sm px-4 py-3 font-mono text-sm text-white placeholder:text-[#8a9a8e]/30 focus:outline-none focus:border-white/50 transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-white/50 tracking-widest uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Hi Abdullah, I'd like to work with you on..."
                  className="w-full backdrop-blur-[1.5px] bg-[#1a1a18] border border-white/15 rounded-sm px-4 py-3 font-mono text-sm text-white placeholder:text-[#8a9a8e]/30 focus:outline-none focus:border-white/50 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-sm font-mono font-bold text-sm tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: status === "sending" ? "#E5E5E5" : "#FFFFFF",
                  color: "#374151",
                }}
              >
                {status === "sending" ? "// sending..." : "Send Message ↗"}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-sm border border-white/30 bg-white/08">
                  <span className="text-white">✔</span>
                  <span className="font-mono text-xs text-white">
                    Message sent! I&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-sm border border-red-500/30 bg-red-500/08">
                  <span className="text-red-400">✖</span>
                  <span className="font-mono text-xs text-red-400">
                    Something went wrong. Try emailing directly.
                  </span>
                </div>
              )}

              {/* Terminal prompt */}
              <p className="font-mono text-[10px] text-[#8a9a8e]/30 mt-1">
                <span className="text-white/40">~/contact</span> — all fields
                required
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
