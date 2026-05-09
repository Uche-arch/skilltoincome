"use client";

import dynamic from "next/dynamic";

const Testimonial9 = dynamic(
  () =>
    import("./testimonial9").then(
      (mod) => mod.Testimonial9
    ),
  {
    ssr: false,
  }
);

export default Testimonial9;