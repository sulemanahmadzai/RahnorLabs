import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FiverrIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M21.997 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s9.997 4.477 9.997 10zM8.4 16.8h2.4v-6h3.6v6H16.8V9.6h-6v-1.2c0-.66.54-1.2 1.2-1.2h1.2V4.8h-1.2a3.6 3.6 0 00-3.6 3.6v1.2H7.2v2.4h1.2v4.8z" />
    </svg>
  );
}

function UpworkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sulemanahmadzai/",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/sulemanahmadzai",
    icon: GitHubIcon,
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/s/jjz8vxm",
    icon: FiverrIcon,
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/umara40?mp_source=share",
    icon: UpworkIcon,
  },
];

export function Footer() {
  return (
    <footer
      className="border-t border-[#334155] bg-[#0A0A1A]"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/assets/Rahnor%20Mark.svg"
              alt="Rahnor — Web, AI & Mobile App Development Company"
              width={84}
              height={84}
              className="-mt-1 h-14 w-14 object-contain"
            />
            <p className="mt-2 text-sm text-white">
              Web development, AI development & mobile app development studio.
              Production-grade software, shipped fast.
            </p>
            <address className="mt-3 text-xs not-italic text-[#94A3B8]">
              <span>Islamabad, Pakistan</span>
              <br />
              <a
                href="mailto:suleman.atworkalways@gmail.com"
                className="transition-colors hover:text-white"
              >
                suleman.atworkalways@gmail.com
              </a>
            </address>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-4 md:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-white"
                aria-label={`Rahnor on ${link.label}`}
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#334155] pt-8 text-xs text-white sm:flex-row">
          <span className="flex items-center gap-2">
            <Image
              src="/assets/Rahnor%20Mark.svg"
              alt="Rahnor"
              width={36}
              height={36}
              className="h-7 w-7 object-contain"
            />
            <span>&copy; {new Date().getFullYear()} Rahnor. All rights reserved.</span>
          </span>
          <span>{"Built in Islamabad, Pakistan \u{1F1F5}\u{1F1F0}"}</span>
        </div>
      </div>
    </footer>
  );
}
