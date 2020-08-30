import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

function Me() {
  return (
    <div style={{ height: "100vh" }}>
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
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        Aspiring Software Developer
      </h3>
      <div style={{ marginLeft: "39%", paddingTop: "5%" }}>
        <a href="www.linkedin.com/in/sydniechau">
          <img
            style={{ maxWidth: "6.5%", maxHeight: "6.5%", paddingRight: "1%" }}
            src={require("../images/linkedin.png")}
          />
        </a>

        <img
          style={{ maxWidth: "7%", maxHeight: "7%", paddingRight: "1%" }}
          src={require("../images/facebook.png")}
        />
        <img
          style={{ maxWidth: "7%", maxHeight: "7%", paddingRight: "1%" }}
          src={require("../images/github.png")}
        />
        <img
          style={{ maxWidth: "7%", maxHeight: "7%", paddingRight: "1%" }}
          src={require("../images/email.png")}
        />
        <img
          style={{ maxWidth: "7%", maxHeight: "7%", paddingRight: "1%" }}
          src={require("../images/youtube.png")}
        />
      </div>

      <img
        style={{
          paddingLeft: "46%",
          maxWidth: "125%",
          maxHeight: "15%",
          paddingTop: "5%",
        }}
        src={require("../images/scroll.gif")}
      />
    </div>
  );
}

export default Me;

const imgstyle = {
  maxHeight: "80px",
  paddingLeft: "10%",
};
