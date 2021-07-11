import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-scroll";

class Me extends Component {
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
        {this.state.matches && MeDesktop()}
        {!this.state.matches && MeMobile()}
      </div>
    );
  }
}

export default Me;

const imgstyle = {
  maxHeight: "80px",
  paddingLeft: "10%",
};

function MeDesktop() {
  return (
    <div className="me" id="me">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "15%",
        }}
      >
        Sydnie Chau
      </h1>
      <h3 className="center"> Software Engineering Intern</h3>
      <div className="center" style={{ paddingTop: "3%" }}>
        <a href="https://www.linkedin.com/in/sydniechau">
          <img
            style={{ maxWidth: "5%", maxHeight: "5%", paddingRight: "1%" }}
            src={require("../images/linkedin.png")}
          />
        </a>
        <a href="https://www.facebook.com/sydnie.chau">
          <img
            style={{ maxWidth: "5%", maxHeight: "5%", paddingRight: "1%" }}
            src={require("../images/facebook.png")}
          />
        </a>
        <a href="  https://github.com/sydnieec ">
          <img
            style={{ maxWidth: "5%", maxHeight: "5%", paddingRight: "1%" }}
            src={require("../images/github.png")}
          />
        </a>
        <a href="mailto:sydnie.chau@gmail.com">
          <img
            style={{ maxWidth: "5%", maxHeight: "5%", paddingRight: "1%" }}
            src={require("../images/emailicon1.png")}
          />
        </a>

        <a href="https://www.youtube.com/channel/UCu4_FpUOJeAR4skiRGsi3SQ">
          <img
            style={{ maxWidth: "5%", maxHeight: "5%", paddingRight: "1%" }}
            src={require("../images/youtube.png")}
          />
        </a>
      </div>
      <Link
        style={{
          paddingLeft: "2%",
        }}
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img
          style={{
            maxWidth: "10%",
            maxHeight: "5%",
            paddingTop: "5%",
          }}
          src={require("../images/scroll.gif")}
          className="center"
        />
      </Link>
    </div>
  );
}

function MeMobile() {
  return (
    <div className="me" id="me">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "25%",
        }}
      >
        Sydnie Chau
      </h1>
      <h3 className="center">Software Engineering Intern</h3>
      <div className="center" style={{ paddingTop: "15%" }}>
        <a href="https://www.linkedin.com/in/sydniechau">
          <img
            style={{ maxWidth: "15%", maxHeight: "15%", paddingRight: "1%" }}
            src={require("../images/linkedin.png")}
          />
        </a>
        <a href="https://www.facebook.com/sydnie.chau">
          <img
            style={{ maxWidth: "15%", maxHeight: "15%", paddingRight: "1%" }}
            src={require("../images/facebook.png")}
          />
        </a>
        <a href="  https://github.com/sydnieec ">
          <img
            style={{ maxWidth: "15%", maxHeight: "15%", paddingRight: "1%" }}
            src={require("../images/github.png")}
          />
        </a>
        <a href="mailto:sydnie.chau@gmail.com">
          <img
            style={{ maxWidth: "15%", maxHeight: "15%", paddingRight: "1%" }}
            src={require("../images/emailicon1.png")}
          />
        </a>

        <a href="https://www.youtube.com/channel/UCu4_FpUOJeAR4skiRGsi3SQ">
          <img
            style={{ maxWidth: "15%", maxHeight: "15%", paddingRight: "1%" }}
            src={require("../images/youtube.png")}
          />
        </a>
      </div>
      <Link
        style={{
          paddingLeft: "2%",
        }}
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img
          style={{
            maxWidth: "25%",
            maxHeight: "15%",
            paddingTop: "10%",
          }}
          src={require("../images/scroll.gif")}
          className="center"
        />
      </Link>
    </div>
  );
}
