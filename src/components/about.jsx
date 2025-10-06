import React, { useEffect, useRef, useState } from "react";
import profileImg from "../assets/profile.png";

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setInView(true);
        setHasAnimated(true);
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options, hasAnimated]);

  return [ref, inView];
}

export default function About() {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  return (
    <section
      ref={aboutRef}
      id="about"
      className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-4 md:px-0 max-w-[1000px] mx-auto py-20 gap-12"
    >
      {/* Left: Text Content */}
      <div
        className={`flex-1 max-w-2xl${
          aboutInView ? " animate-slide-in delay-1" : " opacity-0"
        }`}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-[36px] md:text-[48px] font-bold text-primary">
            / about me
          </h2>
          <div className="flex-1 h-px bg-secondary opacity-30" />
        </div>
        <p className="text-secondary text-lg md:text-xl mb-6 leading-relaxed">
          I am currently a{" "}
          <span className="font-semibold text-primary">
            Full-Stack Developer
          </span>{" "}
          and{" "}
          <span className="text-accent font-semibold">founder of Bellbuy</span>.
          I am passionate about building intuitive and high-performance
          applications. I specialize in translating complex ideas into
          functional, scalable solutions.
        </p>
        <p className="text-secondary text-lg md:text-xl mb-6 leading-relaxed">
          I am also almost finished with my Bachelor's degree in
          <span className="text-accent font-semibold">
            {" "}
            Computer Engineering
          </span>
          .
        </p>
        <p className="text-secondary text-lg md:text-xl mb-6 leading-relaxed">
          Here are some technologies I have been working with:
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-8">
          <ul className="space-y-2 text-accent text-base">
            <li
              className="animate-bullet-in"
              style={{ animationDelay: "1.5s" }}
            >
              ▸ JavaScript (ES6+)
            </li>
            <li
              className="animate-bullet-in"
              style={{ animationDelay: "1.7s" }}
            >
              ▸ TypeScript
            </li>
            <li
              className="animate-bullet-in"
              style={{ animationDelay: "1.9s" }}
            >
              ▸ React.js
            </li>
            <li
              className="animate-bullet-in"
              style={{ animationDelay: "2.1s" }}
            >
              ▸ Node.js
            </li>
          </ul>
          <ul className="space-y-2 text-accent text-base">
            <li
              className="animate-bullet-in"
              style={{ animationDelay: "2.3s" }}
            >
              ▸ Python
            </li>
            <li
              className="animate-bullet-in"
              style={{ animationDelay: "2.5s" }}
            >
              ▸ Express.js
            </li>
            <li
              className="animate-bullet-in"
              style={{ animationDelay: "2.7s" }}
            >
              ▸ PostgreSQL
            </li>
            <li
              className="animate-bullet-in"
              style={{ animationDelay: "2.9s" }}
            >
              ▸ Tailwind CSS
            </li>
          </ul>
        </div>
        <p className="text-secondary text-lg md:text-xl leading-relaxed">
          Outside of work, I enjoy exploring new tech, and playing video games.
        </p>
      </div>
      {/* Right: Profile Image Placeholder */}
      <div className="flex-1 flex items-center md:justify-end justify-center">
        <div className="w-[260px] h-[320px] bg-[#181b20] rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
          <img
            src={profileImg}
            alt="Profile"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
