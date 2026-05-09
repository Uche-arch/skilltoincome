"use client";

import { useState } from "react";
import { DemoModal } from "@/components/demo-modal";
import { modalContent } from "@/lib/modal-content";

import {
  BadgeDollarSign,
  Bot,
  Clapperboard,
  Globe,
  Layers,
  Palette,
  Share2,
  UserCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface FeatureIconListItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}
interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}

interface FeatureIconListProps {
  heading: string;
  features?: FeatureIconListItem[];
  buttons?: Buttons;
  className?: string;
}

interface Feature43Props extends FeatureIconListProps {}
type Props = Partial<Feature43Props>;

const defaultProps: Feature43Props = {
  heading: "Everything You Need to Build a Thriving Career",
  features: [
    {
      icon: <UserCircle className="size-5" />,
      title: "Personal Branding",
      description:
        "Build a bold, magnetic brand that positions you as an authority and attracts the right opportunities.",
    },
    {
      icon: <Palette className="size-5" />,
      title: "Graphic Design",
      description:
        "Master design tools and techniques to craft stunning visuals that command attention and communicate value.",
    },
    {
      icon: <Globe className="size-5" />,
      title: "Virtual Assistance",
      description:
        "Learn in-demand VA skills — admin, scheduling, and client management — to work with global clients.",
    },
    {
      icon: <Share2 className="size-5" />,
      title: "Social Media Management",
      description:
        "Grow and manage engaged audiences across platforms with strategy, content planning, and analytics.",
    },
    {
      icon: <Clapperboard className="size-5" />,
      title: "AI Video Editing",
      description:
        "Edit professional videos faster using AI-powered tools that streamline your entire production workflow.",
    },
    {
      icon: <Bot className="size-5" />,
      title: "Content Writing",
      description:
        "Write compelling, conversion-focused content that tells powerful stories and keeps audiences coming back.",
    },
    {
      icon: <BadgeDollarSign className="size-5" />,
      title: "Skill Monetization",
      description:
        "Turn what you know into income — digital products, service packages, and lots more await you.",
    },
    {
      icon: <Layers className="size-5" />,
      title: "Exclusive Community",
      description:
        "Join a thriving network of like-minded learners, mentors, and collaborators invested in your growth.",
    },
  ],
  buttons: {
    primary: {
      text: "Explore the Academy",
      url: "https://www.shadcnblocks.com",
    },
  },
};

const MAX_FEATURES = 6;

const Feature43 = (props: Props) => {
  const { heading, buttons, features, className } = {
    ...defaultProps,
    ...props,
  };
  const items = (features ?? []).slice(0, MAX_FEATURES);
  const [modal, setModal] = useState<keyof typeof modalContent | null>(null);

  return (
    <section
      id="features"
      className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}
    >
      <div className="container">
        {heading && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty lg:text-5xl">
              {heading}
            </h2>
          </div>
        )}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        {buttons?.primary?.url && (
          <div className="mt-16 flex justify-center">
            {/* <Button size="lg" asChild>
              <a href={buttons.primary.url}>{buttons.primary.text}</a>
            </Button> */}
            <Button size="lg" onClick={() => setModal("explore")}>
              {buttons.primary.text}
            </Button>
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

export { Feature43 };
