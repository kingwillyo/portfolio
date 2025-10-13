import React from "react";
import About from "./components/about";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Projects from "./components/projects";

const App = () => {
  return (
    <main className="font-ntr">
      <Nav />
      <Hero />
      <div className="w-full" style={{ backgroundColor: "#0d0e11" }}>
        <About />
        <Experience />
        <Projects />
      </div>
    </main>
  );
};

export default App;
