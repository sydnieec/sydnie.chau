import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Button, Image } from "react-bootstrap";
import { Link } from "react-scroll";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

class Nav extends Component {
  // handleScroll = () => {
  //   const anchor = document.querySelector("#some-id");
  //   anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  // };
  render() {
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
}

export default Nav;
