import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

function Education() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          paddingTop: "10%",
          paddingLeft: "5%",
          color: "#11cbd7",
        }}
      >
        Education
      </h1>
      <div style={{ marginLeft: "30%" }}>
        <img
          style={{ maxWidth: "30%", maxHeight: "20%", paddingRight: "1%" }}
          src={require("../images/waterloo.png")}
        />
        <img
          style={{ maxWidth: "30%", maxHeight: "20%" }}
          src={require("../images/laurier.png")}
        />
      </div>

      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "15%",
          paddingRight: "15%",
        }}
      >
        University of Waterloo and Wilfrid Laurier University
      </h3>
      <h5
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "15%",
          paddingRight: "15%",
        }}
      >
        Honours Bachelor of Computer Science and Business Administration Double
        Degree
      </h5>
      <h5
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "15%",
          paddingRight: "15%",
          paddingBottom: "8%",
        }}
      >
        2020-2025
      </h5>
    </div>
  );
}

export default Education;
