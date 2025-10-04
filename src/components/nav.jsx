import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail } from "lucide-react";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top-=50",
      end: "bottom top",
      toggleClass: {
        targets: navRef.current,
        className: "scrolled",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full py-4 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-[40px]">
          <a
            href="#home"
            className="flex items-center text-[20px] font-bold transition duration-300 ease-in-out"
          >
            <p>Will Okhakumhe</p>
          </a>
          <ul className="hidden md:flex gap-[24px]">
            <li>
              <a
                href="#hero"
                className="hover:text-accent transition duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-accent transition duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-accent transition duration-300 ease-in-out"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-accent transition duration-300 ease-in-out"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-[16px]">
          <a
            href="mailto:okhakumhewill@gmail.com"
            className="hover:text-accent transition duration-300 ease-in-out"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/kingwillyo"
            className="hover:text-accent transition duration-300 ease-in-out"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/okhakumhe-will-26a533354/"
            className="hover:text-accent transition duration-300 ease-in-out"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
