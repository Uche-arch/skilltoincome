"use client";

import { useState } from "react";
import { DemoModal } from "@/components/demo-modal";
import { modalContent } from "@/lib/modal-content";

import { ArrowDownRight, Star } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Heroimg from "@/app/img/cathie-hero.png";
import avatar1 from "@/app/img/creator-1.png";
import avatar2 from "@/app/img/creator-2.png";
import avatar3 from "@/app/img/creator-3.png";
import avatar4 from "@/app/img/creator-4.png";
import avatar5 from "@/app/img/creator-11.png";
import Image from "next/image";

interface Hero3Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
      className?: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
    rating?: number;
  };
  className?: string;
}

const Hero3 = ({
  heading = "Turn Your Skills Into Clients & Income",
  description = "Practical, real-world training built for ambitious learners. Join the academy and transform your passion and talents into a thriving, profitable career.",
  buttons = {
    primary: {
      text: "Book a Consultation",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Join the Academy",
      url: "https://www.shadcnblocks.com",
    },
  },
  reviews = {
    count: 350,
    rating: 5.0,
    avatars: [
      {
        src: avatar2.src,
        alt: "Avatar 1",
      },
      {
        src: avatar1.src,
        alt: "Avatar 2",
      },
      {
        src: avatar3.src,
        alt: "Avatar 3",
      },
      {
        src: avatar4.src,
        alt: "Avatar 4",
      },
      {
        src: avatar5.src,
        alt: "Avatar 5",
      },
    ],
  },
  className,
}: Hero3Props) => {
  const [modal, setModal] = useState<keyof typeof modalContent | null>(null);

  return (
    <section
      className={cn("py-20 md:py-24 lg:py-26 flex justify-center", className)}
    >
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl xl:text-7xl">
            {heading}
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            {description}
          </p>
          <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="inline-flex items-center -space-x-4">
              {reviews.avatars.map((avatar, index) => (
                <Avatar key={index} className="size-12 border">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                </Avatar>
              ))}
            </span>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="mr-1 font-semibold">
                  {reviews.rating?.toFixed(1)}
                </span>
              </div>
              <p className="text-left font-medium text-muted-foreground">
                from {reviews.count}+ reviews
              </p>
            </div>
          </div>
          {/* <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.secondary && (
              <Button
                asChild
                variant="outline"
                size="lg"
                onClick={() => setModal("consultation")}
              >
                <a href={buttons.secondary.url}>
                {buttons.secondary.text}
                <ArrowDownRight className="size-4" />
                </a>
              </Button>
            )}
            {buttons.primary && (
              <Button
                asChild
                className="w-full sm:w-auto"
                size="lg"
                onClick={() => setModal("academy")}
              >
                <a href={buttons.primary.url}>
                {buttons.primary.text}
                </a>
              </Button>
            )}
          </div> */}
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.secondary && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => setModal("consultation")}
              >
                {buttons.secondary.text}
              </Button>
            )}
            {buttons.primary && (
              <Button
                className="w-full sm:w-auto"
                size="lg"
                onClick={() => setModal("academy")}
              >
                {buttons.primary.text}
              </Button>
            )}
          </div>
        </div>
        <div className="flex">
          <Image
            src={Heroimg}
            alt="Cathie Hero"
            priority // This makes the hero image load faster
            className="hidden lg:block max-h-[600px] w-full rounded-xl object-cover lg:max-h-[800px]"
          />
        </div>
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

export { Hero3 };
