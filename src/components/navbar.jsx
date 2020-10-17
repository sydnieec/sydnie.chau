import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Button, Image } from "react-bootstrap";
import { Link } from "react-scroll";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

class Nav extends Component {
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
      <React.Fragment>
        {this.state.matches && NavDesktop()}
        {!this.state.matches && NavMobile()}
      </React.Fragment>
    );
  }
}

export default Nav;

function NavDesktop() {
  return (
    <Navbar sticky="top" className="color-nav" variant="dark">
      <Navbar.Brand>Sydnie Chau</Navbar.Brand>
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
        About
      </Link>
      <Link
        style={{
          paddingLeft: "2%",
        }}
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Projects
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button
          variant="outline-light"
          href="https://resume.creddle.io/resume/axa9bjbgti9"
        >
          Resume
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

function NavMobile() {
  return (
    <Navbar sticky="top" className="color-nav" variant="dark">
      <Link
        style={{
          paddingLeft: "2%",
        }}
        to="me"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        activeStyle={{ color: "blue" }}
      >
        Sydnie Chau
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button
          variant="outline-light"
          href="https://resume.creddle.io/resume/axa9bjbgti9"
        >
          Resume
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
