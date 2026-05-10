"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import avatar1 from "@/app/img/creator-1.png";
import avatar2 from "@/app/img/creator-2.png";
import avatar3 from "@/app/img/creator-3.png";
import avatar4 from "@/app/img/creator-4.png";
import avatar5 from "@/app/img/creator-11.png";
import avatar6 from "@/app/img/creator-12.png";

interface TestimonialBasicGridItem {
  id?: string;
  name: string;
  avatar: string;
  content: string;
  role?: string;
  username?: string;
  date?: string;
  link?: string;
  icon?: string;
}

interface TestimonialBasicGridProps {
  heading: string;
  description: string;
  testimonials: TestimonialBasicGridItem[];
  className?: string;
}

interface Testimonial9Props extends TestimonialBasicGridProps {}
type Props = Partial<Testimonial9Props>;

const defaultProps: Testimonial9Props = {
  heading: "What Our Students Are Saying",
  description:
    "Hear from real beginners who took the leap, learned the skills, and started earning online.",
  testimonials: [
    {
      id: "1",
      name: "Amaka Osei",
      username: "amakaosei",
      date: "2025-01-15",
      role: "Virtual Assistant",
      avatar: avatar2.src,
      content:
        "I joined with zero experience and landed my first client in week four. Catherine breaks everything down so simply that even I — someone who had never worked online — could follow along and start earning.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/facebook-icon.svg",
    },
    {
      id: "2",
      name: "Tolu Adeyemi",
      username: "oluadeyemi",
      date: "2025-01-20",
      role: "Freelance Graphic Designer",
      avatar: avatar4.src,
      content:
        "The graphic design module was a game changer. I went from not knowing what Canva was to charging clients for brand designs. The step-by-step approach and live sessions made all the difference for me.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/x-icon.svg",
    },
    {
      id: "3",
      name: "Chisom Eze",
      username: "chisom_eze",
      date: "2025-02-03",
      role: "Content Writer",
      avatar: avatar6.src,
      content:
        "I was skeptical at first, but Catherine's cold DM strategy actually works. I sent ten DMs and got two clients in my first week of trying. This program is the real deal.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/x-icon.svg",
    },
    {
      id: "4",
      name: "Fatima Bello",
      username: "fatimabello",
      date: "2025-02-10",
      role: "Social Media Manager",
      avatar: avatar1.src,
      content:
        "I manage three client accounts now and I only use my phone. Catherine was right — you really do not need a laptop to start. The community managers were so patient with me throughout the program.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/facebook-icon.svg",
    },
    {
      id: "5",
      name: "Blessing Nwosu",
      username: "blessingnwosu",
      date: "2025-02-18",
      role: "AI Video Editor",
      avatar: avatar3.src,
      content:
        "The AI video editing skill was something I never imagined learning. Six weeks later I have a portfolio and a paying client. Catherine's weekly check-ins kept me accountable and motivated every single week.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/linkedin-icon.svg",
    },
    {
      id: "6",
      name: "Emeka Okafor",
      username: "emekaokafor",
      date: "2025-03-01",
      role: "Freelance VA & Designer",
      avatar: avatar5.src,
      content:
        "I was working a 9-to-5 and doing this program just 1-2 hours daily. By week five I had made enough to cover the program fee. Best investment I have made in myself this year, hands down.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/x-icon.svg",
    },
    {
      id: "7",
      name: "Ngozi Uche",
      username: "ngozi_uche",
      date: "2025-03-10",
      role: "Personal Brand Coach",
      avatar: avatar1.src,
      content:
        "The personal branding module helped me find my voice online. Catherine provides content templates so you never run out of what to post. My following grew and clients started reaching out to me directly.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/linkedin-icon.svg",
    },
    {
      id: "8",
      name: "Rejoice Amos",
      username: "rejoiceamos",
      date: "2025-03-22",
      role: "Online Entrepreneur",
      avatar: avatar2.src,
      content:
        "What I love most is the community. Everyone is supportive, the managers respond fast, and Catherine herself shows up every week. You never feel alone in this journey.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/facebook-icon.svg",
    },
    {
      id: "9",
      name: "David Mensah",
      username: "davidmensah",
      date: "2025-04-05",
      role: "Freelance Content Writer",
      avatar: avatar1.src,
      content:
        "I joined as a complete beginner with no skills and no clients. Six weeks later I had completed five in-demand skills, built my personal brand, and landed two paying clients. Catherine's program genuinely changes lives.",
      link: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/testimonials/social-network-icons/linkedin-icon.svg",
    },
  ],
};

const Testimonial9 = (props: Props) => {
  const { heading, description, testimonials, className } = {
    ...defaultProps,
    ...props,
  };

  const list = testimonials.slice(0, 6);

  return (
    <section
      id="testimonial"
      className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-center text-3xl font-semibold lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <div className="mt-14 w-full">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
          >
            <Masonry gutter="20px" columnsCount={3}>
              {list.map((testimonial, idx) => {
                return (
                  <Card key={testimonial.id} className="p-5">
                    <div className="flex justify-between">
                      <div className="flex gap-4 leading-5">
                        <Avatar className="size-9 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      {testimonial.icon ? (
                        <a href={testimonial.link ?? "#"}>
                          <img
                            alt="Testimonial source"
                            src={testimonial.icon}
                            className="size-4 dark:invert"
                          />
                        </a>
                      ) : null}
                    </div>
                    <div className="mt-2 leading-7 text-muted-foreground">
                      <q>{testimonial.content}</q>
                    </div>
                  </Card>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export { Testimonial9 };
