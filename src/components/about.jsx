import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Element } from "react-scroll";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 1024px)").matches };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addListener(handler);
  }
  render() {
    return (
      <div className="me" style={{ height: "100vh" }}>
        {this.state.matches && AboutDesktop()}
        {!this.state.matches && AboutMobile()}
      </div>
    );
  }
}
export default About;

function AboutDesktop() {
  return (
    <div
      className="about"
      id="about"
      name="example-destination"
      style={{ height: "100vh" }}
    >
      <h1
        style={{
          display: "flex",
          paddingTop: "5%",
          paddingLeft: "5%",
          color: "#11cbd7",
        }}
      >
        About Me
      </h1>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "15%",
          paddingRight: "15%",
          paddingTop: "10%",
        }}
      >
        👋 Hi, I'm Sydnie! I am currently 1A student at the University of
        Waterloo studying Computer Science and Business Administration Double
        Degree joint with Wilfrid Laurier University. I love to code! In my
        spare time, I enjoy working on side projects and you can find some of my
        proudest projects below.
      </h3>
      <h3
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
      </h3>
    </div>
  );
}

function AboutMobile() {
  return (
    <div className="about" id="about" name="example-destination">
      <h1
        style={{
          display: "flex",
          paddingTop: "5%",
          paddingLeft: "5%",
          color: "#11cbd7",
        }}
      >
        About Me
      </h1>
      <h5
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "15%",
          paddingRight: "15%",
          paddingTop: "10%",
        }}
      >
        👋 Hi, I'm Sydnie! I am currently 1A student at the University of
        Waterloo studying Computer Science and Business Administration Double
        Degree joint with Wilfrid Laurier University. I love to code! In my
        spare time, I enjoy working on side projects and you can find some of my
        proudest projects below.
      </h5>
      <h5
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
      </h5>
    </div>
  );
}
