import Image from "next/image";
import { Navbar1 } from "@/components/navbar1";
import { Hero3 } from "@/components/hero3";
import { About3 } from "@/components/about3";
import { Feature43 } from "@/components/feature43";
import Testimonial9 from "@/components/testimonial9-wrapper";
import { Team1 } from "@/components/team1";
import { Community1 } from "@/components/community1";
import { Faq1 } from "@/components/faq1";
import { Contact7 } from "@/components/contact7";
import { Footer2 } from "@/components/footer2";

export default function Home() {
  return (
    <>
      <div className="px-2 sm:px-0 lg:px-0">
        <Navbar1></Navbar1>
        <Hero3></Hero3>
        <Feature43></Feature43>
        <About3></About3>
        <Testimonial9></Testimonial9>
        <Team1></Team1>
        <Community1></Community1>
        <Faq1></Faq1>
        <Contact7></Contact7>
        <Footer2></Footer2>
      </div>
    </>
  );
}
