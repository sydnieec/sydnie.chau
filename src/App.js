import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/navbar";
import Me from "./components/me";
import About from "./components/about";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Me />
      <About />
      <Projects />
      <Education />
      <Contact />
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
