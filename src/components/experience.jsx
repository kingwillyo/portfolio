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

export default function Experience() {
  const [experienceRef, experienceInView] = useInView({ threshold: 0.2 });

  const experiences = [
    {
      company: "Bellbuy",
      title: "Founder & Full-Stack Developer",
      period: "2025 - PRESENT",
      description: [
        "Founded and Built a mobile marketplace app for university students using React Native (Expo) and Supabase.",
        "Implemented secure authentication, university-based product filtering, and real-time buyer–seller chat.",
        "Integrated Paystack payments with escrow logic via Supabase Edge Functions to ensure safe transactions.",
        "Designed features like cart, wishlist, flash sales, and payouts for sellers to streamline e-commerce on campus.",
      ],
    },
    {
      company: "Freelance",
      title: "Full-Stack Developer",
      period: "2023 - 2024",
      description: [
        "Developed a custom web application for a client using modern JavaScript frameworks",
        "Built responsive, mobile-first application with focus on performance and user experience",
        "Collaborated with client to translate business requirements into technical solutions",
        "Implemented RESTful APIs and database optimization for improved application performance",
      ],
    },
    {
      company: "Bells university of technology",
      title: "B.Sc. Computer Engineering",
      period: "2023 - 2028",
      description: [
        "Expected graduation: 2024",
        "Relevant coursework: Data Structures, Algorithms, Software Engineering, Databases, Machine Learning",
        "Dean's List (multiple years)",
        "Active member of the Engineering Society and Hackathon participant",
      ],
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section
      ref={experienceRef}
      id="experience"
      className="w-full min-h-[80vh] flex flex-col items-start justify-center px-4 md:px-0 max-w-[1000px] mx-auto py-20"
    >
      {/* Header Section */}
      <div
        className={`w-full${
          experienceInView ? " animate-slide-in delay-1" : " opacity-0"
        }`}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[36px] md:text-[48px] font-bold text-primary">
            / experience
          </h2>
          <div className="flex-1 h-px bg-secondary opacity-30" />
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 items-stretch">
        {/* Left: Company List */}
        <div
          className={`w-full md:w-auto md:min-w-[200px] md:max-w-[250px]${
            experienceInView ? " animate-slide-in delay-2" : " opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 relative">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setSelectedExperience(index)}
                className="text-left p-4 rounded transition-all duration-300 relative"
              >
                {/* Active indicator line */}
                {selectedExperience === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transition-all duration-300 ease-in-out" />
                )}

                <span
                  className={`font-semibold text-sm uppercase tracking-wide ${
                    selectedExperience === index
                      ? "text-accent"
                      : "text-secondary"
                  }`}
                >
                  {exp.company}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Experience Details */}
        <div
          className={`flex-1 h-[500px] overflow-y-auto${
            experienceInView ? " animate-slide-in delay-3" : " opacity-0"
          }`}
        >
          {experiences[selectedExperience] && (
            <div className="relative">
              {/* Animated Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-accent opacity-30 transition-all duration-500 ease-in-out" />

              <div className="ml-8">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {experiences[selectedExperience].title}
                  <span className="text-accent">
                    {" "}
                    @ {experiences[selectedExperience].company}
                  </span>
                </h3>

                <p className="text-accent text-sm font-medium mb-6 uppercase tracking-wide">
                  {experiences[selectedExperience].period}
                </p>

                <ul className="space-y-4">
                  {experiences[selectedExperience].description.map(
                    (item, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-3${
                          experienceInView ? " animate-bullet-in" : ""
                        }`}
                        style={
                          experienceInView
                            ? {
                                animationDelay: `${0.8 + index * 0.2}s`,
                                animationDuration: "1.6s",
                              }
                            : {}
                        }
                      >
                        <span className="text-accent text-sm mt-1">▸</span>
                        <span className="text-secondary text-base md:text-lg leading-relaxed">
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
