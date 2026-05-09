"use client";

import { useState } from "react";
import { DemoModal } from "@/components/demo-modal";
import { modalContent } from "@/lib/modal-content";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LogoIcon from "@/app/img/new-logo.png"; // Adjust path to where you saved it

interface About3Props {
  className?: string;

  title?: string;
  description?: string;

  mainImage?: {
    src: string;
    alt: string;
  };

  secondaryImage?: {
    src: string;
    alt: string;
  };

  breakout?: {
    src?: string;
    alt?: string;
    title: string;
    description: string;
    buttonText?: string;
    buttonUrl?: string;
  };

  companies?: Array<{
    src: string;
    alt: string;
  }> | null;

  achievementsTitle?: string;
  achievementsDescription?: string;

  achievements?: Array<{
    label: string;
    value: string;
  }>;

  contentSections?: Array<{
    title: string;
    content: string;
  }>;
}

const About3 = ({
  className,
  title = "About Us",
  description = "We are a passionate community dedicated to helping beginners earn online through practical, skill-based training. With over $13K made from remote work and a track record of equipping learners with in-demand digital skills, we guide you from zero to earning — one skill at a time.",
  mainImage = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg",
    alt: "about",
  },
  secondaryImage = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg",
    alt: "about",
  },
  breakout = {
    // src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    src: LogoIcon.src,
    alt: "logo",
    title: "Start Your Journey to Earning Online Today",
    description:
      "Empowering beginners with the right skills, strategies, and support to land clients and earn confidently from anywhere.",
    buttonText: "Book a Consultation",
    buttonUrl: "https://www.shadcnblocks.com",
  },
  companies = [
    { src: "/logos/canva.svg", alt: "Canva" },
    { src: "/logos/capcut.svg", alt: "CapCut" },
    { src: "/logos/claude.svg", alt: "Claude" },
    { src: "/logos/linkedin.svg", alt: "LinkedIn" },
    { src: "/logos/instagram.svg", alt: "Instagram" },
    { src: "/logos/facebook.svg", alt: "Facebook" },
  ],

  achievementsTitle = "Our Impact in Numbers",
  achievementsDescription = "Real results from real beginners who chose to invest in themselves and start earning online with in-demand digital skills.",
  achievements = [
    { label: "Students Taught", value: "400+" },
    { label: "Facebook Community", value: "50K+" },
    { label: "Earned From Remote Work", value: "$13K+" },
    { label: "Weeks to Complete Program", value: "6" },
  ],
  contentSections = [
    {
      title: "Our Vision",
      content:
        "For too long, earning online has felt out of reach for many — reserved for the tech-savvy or the privileged few. Beginners are left overwhelmed, unsure of where to start or what skills to build.\n\nWhat if you could learn an in-demand digital skill in just six weeks? What if you could land your first client using nothing but your smartphone?\n\nWith Catherine's academy, you can! Our programs give you the skills, strategies, and support to start earning online — no experience, no laptop, no excuses.\n\nWe believe that anyone, regardless of background or experience, deserves the tools and guidance to build a life of financial freedom.",
    },
    {
      title: "Our Founder",
      content:
        "Catherine Anthony Ikono is a digital skills coach, brand strategist, and founder of a thriving online academy with over 50,000 learners in her Facebook community. With over $13K earned from remote work herself, she teaches what she has lived.\n\nWhat started as a passion for helping beginners navigate the online space has grown into a movement — over 400 students trained, five in-demand skills taught, and countless first clients landed.\n\nCatherine leads weekly live check-ins personally, ensuring every learner — fast or slow — gets the support they need. Her approach is simple: learn the skill, build your brand, land the client, and earn.",
    },
  ],
}: About3Props) => {
  const [modal, setModal] = useState<keyof typeof modalContent | null>(null);
  return (
    <section
      id="about"
      className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}
    >
      <div className="container">
        <div className="mb-14 flex flex-col gap-5 lg:w-2/3">
          <h1 className="text-5xl font-semibold tracking-tighter lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12 dark:invert"
              />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              {/* <Button variant="outline" className="mr-auto" asChild size="lg">
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button> */}
              <Button
                variant="outline"
                className="mr-auto"
                asChild
                size="lg"
                onClick={() => setModal("consultation")}
              >
                {/* <a href={breakout.buttonUrl} target="_blank"> */}
                <a>{breakout.buttonText}</a>
              </Button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        {companies && (
          <div className="py-32">
            <Marquee>
              <MarqueeContent speed={40}>
                {companies.map((company, idx) => (
                  <MarqueeItem
                    key={company.src + idx}
                    className="mx-8 flex items-center"
                  >
                    <img
                      src={company.src}
                      alt={company.alt}
                      className="h-7 w-auto md:h-8 dark:invert"
                    />
                  </MarqueeItem>
                ))}
              </MarqueeContent>
              <MarqueeFade side="left" />
              <MarqueeFade side="right" />
            </Marquee>
          </div>
        )}
        <div className="relative overflow-hidden rounded-xl bg-muted p-7 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl font-medium md:text-4xl">
              {achievementsTitle}
            </h2>
            <p className="max-w-xl text-muted-foreground">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:flex-wrap md:justify-between">
            {achievements.map((item, idx) => (
              <div
                className="flex flex-col gap-2 text-center md:text-left"
                key={item.label + idx}
              >
                <span className="font-mono text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
                <p className="text-sm md:text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        {contentSections && contentSections.length > 0 && (
          <div className="mx-auto grid max-w-5xl gap-16 py-28 md:grid-cols-2 md:gap-28">
            {contentSections.map((section, idx) => (
              <div key={section.title + idx}>
                <h2 className="mb-5 text-4xl font-medium">{section.title}</h2>
                <p className="text-lg leading-7 whitespace-pre-line text-muted-foreground">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        )}
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

export { About3 };
