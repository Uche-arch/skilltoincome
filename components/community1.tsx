import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LogoIcon from "@/app/img/new-logo.png"; // Adjust path to where you saved it

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface Community1Props {
  logo?: string;
  heading?: string;
  headingHighlight?: string;
  socialLinks?: SocialLink[];
  className?: string;
}

const Community1 = ({
  // logo = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  logo = LogoIcon.src,
  heading = "Join our community",
  headingHighlight = "of learners & earners",
  socialLinks = [
    { icon: <FaXTwitter />, url: "#", label: "Follow us on Twitter" },
    { icon: <FaFacebook />, url: "#", label: "Follow us on Facebook" },
    { icon: <FaLinkedin />, url: "#", label: "Follow us on LinkedIn" },
  ],
  className,
}: Community1Props) => {
  return (
    <section
      className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}
    >
      <div className="container">
        <div className="flex flex-col items-center gap-5">
          <img src={logo} alt="logo" className="size-10" />
          <h2 className="text-center text-3xl font-semibold">
            {heading}
            <br />
            <span className="text-muted-foreground/80">{headingHighlight}</span>
          </h2>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <Button key={index} size="lg" variant="outline" asChild>
                <a
                  href={link.url}
                  target="_blank"
                  aria-label={link.label}
                  className="size-10"
                >
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Community1 };
