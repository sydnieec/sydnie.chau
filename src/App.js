import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/navbar";
import Me from "./components/me";
import About from "./components/about";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";
import Experience from "./components/experience";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Me />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </React.Fragment>
  );
}

export default App;
