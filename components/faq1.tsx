import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  className?: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
  className?: string;
}

const Faq1 = ({
 heading = "Frequently Asked Questions",
items = [
  {
    id: "faq-1",
    question: "Do I need a laptop or computer to join?",
    answer:
      "No, you do not need a laptop or computer. All you need is your smartphone to get started. The program is designed to work for everyone, even if you have never used a computer before.",
  },
  {
    id: "faq-2",
    question: "Do I need any prior experience to enroll?",
    answer:
      "Not at all. This program is built for complete beginners. We start from zero and guide you step-by-step through everything you need to know to start earning online.",
  },
  {
    id: "faq-3",
    question: "How long does the program take to complete?",
    answer:
      "The program runs for six weeks. Even if you are busy with work or school, just 1-2 hours a day is enough to complete the program and start earning.",
  },
  {
    id: "faq-4",
    question: "What if I miss a live class?",
    answer:
      "No worries at all. All live classes are recorded so you can watch them at any time that works for you. You can learn entirely at your own pace.",
  },
  {
    id: "faq-5",
    question: "What skills will I learn in the program?",
    answer:
      "You will learn five in-demand digital skills — Virtual Assistance, Graphic Design, Social Media Management, Content Writing, and AI Video Editing. You will also learn how to monetize each skill and land your first client.",
  },
  {
    id: "faq-6",
    question: "How will I get my first client?",
    answer:
      "We provide you with proven cold DM strategies and hands-on support to help you land your first client. You do not just learn the skill — you learn exactly how to turn it into income.",
  },
  {
    id: "faq-7",
    question: "Will I get support throughout the program?",
    answer:
      "Absolutely. You will have access to an exclusive community with dedicated community managers who give you priority support, even if you are a slow learner. Catherine also holds weekly live check-ins to discuss your progress personally.",
  },
],
  className,
}: Faq1Props) => {
  return (
    <section
    id="faq"
      className={cn("py-16 md:py-20 lg:py-24 flex justify-center bg-background", className)}
    >
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl text-foreground">
            {heading}
          </h2>
          <Accordion type="single" collapsible>
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="hover:no-underline text-base md:text-lg text-foreground hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq1 };
