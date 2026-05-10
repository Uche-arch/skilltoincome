"use client";

import { useState } from "react";
import { DemoModal } from "@/components/demo-modal";
import { modalContent } from "@/lib/modal-content";

// import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import {
  BadgeDollarSign,
  CalendarCheck,
  Menu,
  Palette,
  Zap,
} from "lucide-react";
import LogoIcon from "@/app/img/new-logo.png"; // Adjust path to where you saved it
import Image from "next/image"; // Highly recommended for performance

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: LogoIcon.src, // Use the .src property from the import
    alt: "Skillupandearn Logo",
    title: "skillupandearn",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Features",
      url: "#features",
      items: [
        {
          title: "Virtual Assistance",
          description:
            "Learn to offer top-tier admin, scheduling, and client support as a sought-after VA.",
          icon: <CalendarCheck className="size-5 shrink-0" />,
          url: "#features",
        },
        {
          title: "Graphic Design",
          description:
            "Master the tools and techniques to create stunning visuals and brand identities.",
          icon: <Palette className="size-5 shrink-0" />,
          url: "#features",
        },
        {
          title: "Skill Monetization",
          description:
            "Turn what you know into income — digital products, services, and lots more.",
          icon: <BadgeDollarSign className="size-5 shrink-0" />,
          url: "#features",
        },
      ],
    },
    {
      title: "About Us",
      url: "#about",
    },
    {
      title: "Testimonials",
      url: "#testimonials",
    },
    {
      title: "Team",
      url: "#team",
    },
    {
      title: "Contact Us",
      url: "#contact",
    },
  ],
  auth = {
    login: { title: "Book a Consultation", url: "#" },
    signup: { title: "Join the Academy", url: "#" },
  },
  className,
}: Navbar1Props) => {
  const [modal, setModal] = useState<keyof typeof modalContent | null>(null);
  return (
    <section className={cn("py-4 flex justify-center", className)}>
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-1">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
              {/* <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span> */}
              <span className="text-xl font-bold tracking-tighter text-[oklch(0.20_0.02_245)]">
                skill<span className="text-[oklch(0.60_0.22_245)]">up</span>
                andearn
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            {/* <Button asChild variant="outline" size="lg">
              <a href={auth.login.url}>{auth.login.title}</a>
            </Button> */}
            {/* <Button asChild size="lg">
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button> */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => setModal("consultation")}
            >
              {auth.login.title}
            </Button>
            <Button size="lg" onClick={() => setModal("academy")}>
              {auth.signup.title}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-1">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
              <span className="text-xl font-bold tracking-tighter text-[oklch(0.20_0.02_245)]">
                skill<span className="text-[oklch(0.60_0.22_245)]">up</span>
                andearn
              </span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-1">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                      <span className="text-xl font-bold tracking-tighter text-[oklch(0.20_0.02_245)]">
                        skill
                        <span className="text-[oklch(0.60_0.22_245)]">up</span>
                        andearn
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    {/* <Button asChild variant="outline" size="lg">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild size="lg">
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button> */}
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setModal("consultation")}
                    >
                      {auth.login.title}
                    </Button>
                    <Button size="lg" onClick={() => setModal("academy")}>
                      {auth.signup.title}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* ✅ Single modal instance for the whole navbar */}
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

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        {/* Wrap the trigger in a link for the scroll functionality */}
        <a href={item.url} className="no-underline">
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        </a>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold no-underline">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground no-underline">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
