import React from "react";
import About from "./components/about";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Nav from "./components/nav";

const App = () => {
  return (
    <main className="font-ntr">
      <Nav />
      <Hero />
      <div className="w-full" style={{ backgroundColor: "#0d0e11" }}>
        <About />
        <Experience />
      </div>
    </main>
  );
};

export default App;
