import React from "react";
import About from "./components/about";
import Hero from "./components/hero";
import Nav from "./components/nav";

const App = () => {
  return (
    <main className="font-ntr">
      <Nav />
      <Hero />
      <div className="w-full" style={{ backgroundColor: "#0d0e11" }}>
        <About />
      </div>
    </main>
  );
};

export default App;
