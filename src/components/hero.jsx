import { Download } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import TreeAnimation from "./TreeAnimation";

export default function Hero() {
  const el = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    typedRef.current = new Typed(el.current, {
      strings: ["hi, <span class='text-accent'>Will</span> here."],
      typeSpeed: 70,
      showCursor: true,
      cursorChar: "|",
      loop: false,
    });

    return () => {
      typedRef.current?.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-auto md:h-screen hero-grid-background text-primary pt-20 md:pt-0 w-full"
    >
      <div className="w-full max-w-[1140px] px-8 sm:px-6 lg:px-8">
        <TreeAnimation />
        <h1 className="text-[46px] md:text-[86px] font-bold leading-tight mb-0 text-center">
          <span ref={el}></span>
        </h1>

        <p className="text-[28px] md:text-[48px] text-secondary text-center animate-slide-in delay-1 mt-0 mb-0 leading-tight">
          I build intuitive applications.
        </p>
        <p className="text-[18px] md:text-[22px] text-secondary text-center mb-[50px] animate-slide-in delay-1">
          I'm a Full-Stack Developer from Nigeria, mastering the complete
          product lifecycle <br />
          from pixel-perfect UI to secure API deployment. I specialize in
          translating complex <br />
          ideas into functional, high-performance end-to-end solutions.
        </p>
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-[2px] border-2 rounded-sm py-[13px] px-[30px] text-accent animate-slide-in delay-2 hover:bg-accent hover:text-white transition-colors duration-300"
          >
            <Download size={20} /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}
