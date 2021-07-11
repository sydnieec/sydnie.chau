import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

class Education extends Component {
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
      <div>
        {this.state.matches && EducationDesktop()}
        {!this.state.matches && EducationMobile()}
      </div>
    );
  }
}
export default Education;

function EducationMobile() {
  return (
    <div className="education">
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
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <img
          style={{ maxWidth: "50%", maxHeight: "40%", paddingRight: "1%" }}
          src={require("../images/waterloo.png")}
        />
        <img
          style={{ maxWidth: "50%", maxHeight: "40%" }}
          src={require("../images/laurier.png")}
        />
      </div>

      <h7
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "15%",
          paddingRight: "15%",
          paddingBottom: "8%",
        }}
      >
        University of Waterloo and Wilfrid Laurier University
      </h7>
      <h7
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "15%",
          paddingRight: "15%",
          paddingBottom: "8%",
        }}
      >
        Honours Bachelor of Computer Science and Business Administration Double
        Degree
      </h7>
      <h7
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "15%",
          paddingRight: "15%",
          paddingBottom: "8%",
        }}
      >
        Sept. 2020 - Apr. 2025
      </h7>
    </div>
  );
}

function EducationDesktop() {
  return (
    <div className="education">
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
      <div style={{ marginLeft: "1%" }}>
        <img
          style={{ maxWidth: "20%", maxHeight: "10%", paddingRight: "1%" }}
          src={require("../images/waterloo.png")}
        />
        <img
          style={{ maxWidth: "20%", maxHeight: "10%" }}
          src={require("../images/laurier.png")}
        />
      </div>

      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        University of Waterloo and Wilfrid Laurier University
      </h3>
      <h5
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
        Sept. 2020 - Apr. 2025
      </h5>
    </div>
  );
}
