import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

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
      loop: false, // only runs once
    });

    return () => {
      typedRef.current?.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-background text-primary">
      <h1 className="text-4xl font-bold mb-6">
        {/* The typed text goes here */}
        <span ref={el}></span>
      </h1>

      <p className="text-xl text-secondary">
        I build intuitive applications.
      </p>
    </section>
  );
}
