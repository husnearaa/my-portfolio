'use client'
import Link from "next/link";
import { Envelope, MapPin} from '@gravity-ui/icons';


const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/husnearaa",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    color: "#ffffff",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hosneara-popy/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#ffffff",
  },
//   {
//     label: "Facebook",
//     href: "",
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//       </svg>
//     ),
//     color: "#ffffff",
//   },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801629270655",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
    color: "#ffffff",
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#0a0a08] border-t border-[#00E676]/08 backdrop-blur-[0.5px]">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-14">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── Col 1: Logo + tagline ── */}
          <div className="flex flex-col gap-4">
            {/* Logo — replace div with <Image> when ready */}
            {/* <div className="w-32 h-10 relative">
              
                <Image
                  src={logo}
                  alt="MW Logo"
                  fill
                  className="object-contain object-left"
                />
             
              
            </div> */}

            <p className="font-mono text-xs text-[#8a9a8e] leading-relaxed max-w-xs">
              Full Stack Developer turning ideas into{" "}
              <span className="text-white/70">production-ready</span> web applications.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-sm border border-[#ffffff]/08 flex items-center justify-center text-[#8a9a8e]/50 hover:text-white hover:border-[#ffffff]/20 transition-all duration-200"
                  style={{ "--hover-color": social.color } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.borderColor = `${social.color}40`;
                    e.currentTarget.style.background = `${social.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.background = "";
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm text-white tracking-widest uppercase">
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-mono text-sm text-[#d4d4d4] hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="text-white/20 group-hover:text-white/60 transition-colors">›</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 3: Contact info ── */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm text-white tracking-widest uppercase">
              Get in touch
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="mailto:abdullah624683@gmail.com"
                className="font-mono text-xs text-[#d4d4d4] hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-white"><Envelope/></span>
                hosnearapopy462@gmail.com
              </Link>
              {/* <Link
                href="https://wa.me/8801683367535"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#d4d4d4] hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-white"><CommentFill/></span>
                +880 1629270655
              </Link> */}
              <p className="font-mono text-xs text-[#d4d4d4] flex items-center gap-2">
                <span className="text-white"><MapPin/></span>
                Dhaka, Bangladesh
              </p>

              {/* Availability badge */}
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="font-mono text-[10px] text-white/60">
                  available for work
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#00E676]/06">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-4">
          <div className="w-11/12 mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="font-mono text-[10px] text-[#8a9a8e]/30">
              © {currentYear} Hosneara. All rights reserved.
            </p>
            <p className="font-mono text-[10px] text-[#8a9a8e]/20">
              Built with{" "}
              <span className="text-white/40">Next.js</span>
              {" · "}
              <span className="text-white/40">Tailwind CSS</span>
              {" · "}
              <span className="text-white/40">HeroUI</span>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
