import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Button, Image } from "react-bootstrap";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <Navbar sticky="top" className="color-nav" variant="dark">
      <Navbar.Brand>Sydnie Chau</Navbar.Brand>
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

export default Nav;

const imgstyle = {
  maxHeight: "80px",
  paddingLeft: "10%",
};
