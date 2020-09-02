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
        <a href="https://www.linkedin.com/in/sydniechau">
          <img
            style={{ maxWidth: "6%", maxHeight: "6%", paddingRight: "1%" }}
            src={require("../images/linkedin.png")}
          />
        </a>
        <a href="https://www.facebook.com/sydnie.chau">
          <img
            style={{ maxWidth: "6%", maxHeight: "6%", paddingRight: "1%" }}
            src={require("../images/facebook.png")}
          />
        </a>
        <a href="  https://github.com/sydnieec ">
          <img
            style={{ maxWidth: "6%", maxHeight: "6%", paddingRight: "1%" }}
            src={require("../images/github.png")}
          />
        </a>
        <a href="mailto:sydnie.chau@gmail.com">
          <img
            style={{ maxWidth: "6%", maxHeight: "6%", paddingRight: "1%" }}
            src={require("../images/emailicon1.png")}
          />
        </a>

        <a href="https://www.youtube.com/channel/UCu4_FpUOJeAR4skiRGsi3SQ">
          <img
            style={{ maxWidth: "6%", maxHeight: "6%", paddingRight: "1%" }}
            src={require("../images/youtube.png")}
          />
        </a>
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
        © Sydnie Chau 2020
      </h6>
    </div>
  );
}

export default Contact;
