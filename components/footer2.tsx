"use client";

import { useState } from "react";
import { DemoModal } from "@/components/demo-modal";
import { modalContent } from "@/lib/modal-content";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import LogoIcon from "@/app/img/new-logo.png"; // Adjust path to where you saved it
import { cn } from "@/lib/utils";
import { FaXTwitter } from "react-icons/fa6";

interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}
interface FooterLogo {
  url: string;
  src: string;
  alt: string;
  title: string;
}

interface FooterBasicProps {
  logo?: FooterLogo;
  description?: string;
  sections?: FooterSection[];
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

interface Footer2Props extends FooterBasicProps {
  logoClassName?: string;
}
type Props = Partial<Footer2Props>;

const defaultProps: Footer2Props = {
  logo: {
    url: "/",
    // src: "/app/img/new-logo.png", // Her actual logo
    src: LogoIcon.src, // Use the .src property from the import
    alt: "Brand Logo",
    title: "Brand Strategist",
  },
  description:
    "Empowering beginners to learn in-demand digital skills, land their first clients, and build a life of financial freedom online.",
  sections: [
    {
      title: "Quick Links",
      links: [
        { name: "About Me", href: "#about" },
        { name: "Features", href: "#features" },
        { name: "Testimonials", href: "#testimonial" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Work With Me",
      links: [
        { name: "1:1 Consultation", href: "#contact" },
        { name: "The Academy", href: "#features" },
        { name: "Brand Audit", href: "#contact" },
        { name: "Resources", href: "#faq" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} skillupandearn. All rights reserved.`,
  legalLinks: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const MAX_SECTIONS = 4;

const Footer2 = (props: Props) => {
  // Inside your component:
  const [modal, setModal] = useState<keyof typeof modalContent | null>(null);
  const { logo, description, sections, copyright, legalLinks, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

  return (
    <section
      className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}
    >
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center lg:justify-start">
                <a href={logo?.url} className="flex gap-1">
                  <img
                    src={logo?.src}
                    alt={logo?.alt}
                    title={logo?.title}
                    className="h-7 dark:invert"
                  />
                  <span className="text-xl font-bold tracking-tighter text-[oklch(0.20_0.02_245)]">
                    skill<span className="text-[oklch(0.60_0.22_245)]">up</span>
                    andearn
                  </span>
                </a>
              </div>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                {description}
              </p>
              {/* Add this Social Row */}
              <div className="mt-6 flex gap-4 text-muted-foreground">
                <a
                  href="#"
                  aria-label="Follow us on Facebook"
                  className="hover:text-primary"
                >
                  <FaFacebook className="size-5" />
                </a>
                <a
                  href="#"
                  aria-label="Follow us on LinkedIn"
                  className="hover:text-primary"
                >
                  <FaLinkedin className="size-5" />
                </a>
                <a
                  href="#"
                  aria-label="Follow us on Twitter"
                  className="hover:text-primary"
                >
                  <FaXTwitter className="size-5" />
                </a>
              </div>
            </div>
            {visibleSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold tracking-tight">
                  {section.title}
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            {/* <ul className="flex gap-4">
              {legalLinks?.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul> */}
            <ul className="flex gap-4">
              {legalLinks?.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a
                    href="#"
                    aria-label={link.name}
                    onClick={(e) => {
                      e.preventDefault();
                      setModal(
                        link.name === "Privacy Policy" ? "privacy" : "terms",
                      );
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>

      {modal && (
        <DemoModal
          open={!!modal}
          onClose={() => setModal(null)}
          title={modalContent[modal].title}
          description={modalContent[modal].description}
        />
      )}
    </section>
  );
};

export { Footer2 };
