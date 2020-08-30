import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

function About() {
  return (
    <div className="about">
      <h1
        style={{
          display: "flex",
          paddingTop: "15%",
          paddingLeft: "5%",
          color: "#11cbd7",
        }}
      >
        About Me
      </h1>
      <h4
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "15%",
          paddingRight: "15%",
          paddingTop: "5%",
        }}
      >
        👋 Hi, I'm Sydnie! I am currently 1A student at the University of
        Waterloo studying Computer Science and Business Administration Double
        Degree joint with Wilfrid Laurier University. I love to code! In my
        spare time, I enjoy working on side projects and you can find some of my
        proudest projects below.
      </h4>
      <h4
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "15%",
          paddingRight: "15%",
          paddingTop: "5%",
        }}
      >
        💻 My passion for computer science began in 2018 when I began my first
        android application. Ever since, I have been working on building side
        projects in Mobile and Web Development.
      </h4>
    </div>
  );
}

export default About;
