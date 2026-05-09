"use client"

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";


import { useState } from "react";
import { DemoModal } from "@/components/demo-modal";
import { modalContent } from "@/lib/modal-content";

import { cn } from "@/lib/utils";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
  className?: string;
}

const Contact7 = ({
  title = "Contact Us",
  description = "Ready to start your journey or have a question? Reach out and we will get back to you as soon as possible.",
  emailLabel = "Email",
  emailDescription = "Send us a message and we will respond within 24 hours.",
  email = "hello@example.com",
  phoneLabel = "Phone",
  phoneDescription = "Available on weekdays during business hours.",
  phone = "(123) 456-7890",
  chatLabel = "WhatsApp",
  chatDescription = "Prefer a quicker response? Chat with us directly on WhatsApp.",
  chatLink = "Start Chat",
  className,
}: Contact7Props) => {
  const [modal, setModal] = useState<keyof typeof modalContent | null>(null);
  return (
    <section
      id="contact"
      className={cn("py-16 md:py-20 lg:py-24 flex justify-center", className)}
    >
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-muted/50 p-8">
              <Mail className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{emailLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {emailDescription}
              </p>
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </div>
            {/* <div className="rounded-xl bg-muted/50 p-8">
              <MapPin className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{officeLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {officeDescription}
              </p>
              <a href="#" className="hover:underline">
                {officeAddress}
              </a>
            </div> */}
            <div className="rounded-xl bg-muted/50 p-8">
              <Phone className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{phoneLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {phoneDescription}
              </p>
              <a href={`tel:${phone}`} className="hover:underline">
                {phone}
              </a>
            </div>
            <div className="rounded-xl bg-muted/50 p-8">
              <MessageCircle className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{chatLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {chatDescription}
              </p>
              {/* <a href="#" className="hover:underline">
                {chatLink}
              </a> */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setModal("chat");
                }}
                className="hover:underline"
              >
                {chatLink}
              </a>
            </div>
          </div>
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

export { Contact7 };
