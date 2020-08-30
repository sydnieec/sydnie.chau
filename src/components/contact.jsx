import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

function Contact() {
  return (
    <div className="contact" style={{ backgroundColor: "#c6f1e7" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1%",
        }}
      >
        Contact Me
      </h1>
      <div style={{ marginLeft: "41%", paddingTop: "1%" }}>
        <a href="www.linkedin.com/in/sydniechau">
          <img
            style={{ maxWidth: "6%", maxHeight: "6%", paddingRight: "1%" }}
            src={require("../images/linkedin.png")}
          />
        </a>

        <img
          style={{ maxWidth: "6%", maxHeight: "6%", paddingRight: "1%" }}
          src={require("../images/facebook.png")}
        />
        <img
          style={{ maxWidth: "6%", maxHeight: "6%", paddingRight: "1%" }}
          src={require("../images/github.png")}
        />
        <img
          style={{ maxWidth: "6%", maxHeight: "6%", paddingRight: "1%" }}
          src={require("../images/email.png")}
        />
        <img
          style={{ maxWidth: "6%", maxHeight: "6%", paddingRight: "1%" }}
          src={require("../images/youtube.png")}
        />
      </div>
      <h6
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1%",
          paddingBottom: "7%",
        }}
      >
        © Sydnie Chau
      </h6>
    </div>
  );
}

export default Contact;
