import { ExternalLink, Folder, Github } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

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

export default function Projects() {
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });

  const projects = [
    {
      title: "Bellbuy Marketplace",
      description:
        "A comprehensive mobile marketplace app for university students built with React Native and Supabase. Features secure authentication, real-time chat, and integrated payments with escrow functionality.",
      technologies: "React Native, Supabase, TypeScript, Paystack",
      github: "https://github.com/kingwillyo/bellbuy",
      featured: true,
    },
    {
      title: "Focus Fire",
      description:
        "Focus Fire is an MVP productivity application for iOS/Android that gamifies focus using a fire streak metaphor. It uses a physical Barcode Exit System and strong emotional consequences (loss aversion) to enforce deep focus.",
      github: "https://github.com/kingwillyo/focus-fire",
      technologies: "React Native, Firebase, PostgreSQL, TypeScript",
      featured: true,
    },
    {
      title: "Savings Wallet",
      description:
        "Simple way to help control your  savings ",
      github: "https://github.com/kingwillyo/wallet-app",
      technologies: "React Native, Supabase, PostgreSQL, TypeScript",
      featured: true,
    },
    {
      title: "Social App Onboarding Flow",
      description:
        "An onboarding Screen workflow for kairo dev Test",
      technologies: "React Native, TypeScript, Expo",
      github: "https://github.com/kingwillyo/social-app-assignment",
      featured: true,
    },
  ];

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="w-full min-h-[80vh] flex flex-col items-start justify-center px-4 md:px-0 max-w-[1000px] mx-auto py-20"
    >
      {/* Header Section */}
      <div
        className={`w-full${
          projectsInView ? " animate-slide-in delay-1" : " opacity-0"
        }`}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[36px] md:text-[48px] font-bold text-primary">
            / projects
          </h2>
          <div className="flex-1 h-px bg-secondary opacity-30" />
        </div>
      </div>

      {/* Projects Grid */}
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8${
          projectsInView ? " animate-slide-in delay-2" : " opacity-0"
        }`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-[#181b20] rounded-lg p-6 hover:bg-[#1f2229] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10"
            style={{
              animationDelay: projectsInView ? `${0.4 + index * 0.1}s` : "0s",
            }}
          >
            {/* Header with icons */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <Folder className="text-accent w-8 h-8" />
              </div>
              <div className="flex gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                ) : (
                  <div className="text-secondary/50">
                    <Github size={20} />
                  </div>
                )}
                <div className="text-secondary/50">
                  <ExternalLink size={20} />
                </div>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-4">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.split(", ").map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs text-secondary bg-[#0d0e11] px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
