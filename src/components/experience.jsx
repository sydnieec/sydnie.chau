import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

class Experiences extends Component {
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
        {this.state.matches && ExperiencesDesktop()}
        {!this.state.matches && ExperiencesMobile()}
      </div>
    );
  }
}
export default Experiences;

function ExperiencesMobile() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          paddingTop: "5%",
          paddingLeft: "5%",
          color: "#11cbd7",
        }}
      >
        Experiences
      </h1>
      <div>
        <img
          style={{
            paddingTop: "5%",
            paddingBottom: "5%",
            maxWidth: "50%",
            maxHeight: "50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
          src={require("../images/databricksicon.jpeg")}
          alt="databricks"
        />
        <div
          style={{
            padding: "50px",
            paddingTop: "0px",
          }}
        >
          <h3>
            <a
              style={{
                color: "#11cbd7",
              }}
              href="https://www.databricks.com/"
            >
              Databricks
            </a>
          </h3>
          <h4>Software Engineering Intern</h4>
          <p>May 2023 - August 2023</p>
          <p>San Francisco, CA</p>
          <p>
            Incoming Software Engineering Intern on the Search Infrastructure
            Team. Databricks is a cloud-based data analytics and artificial
            intelligence (AI) platform that provides an integrated workspace for
            data engineers, data scientists, and business analysts to
            collaborate and perform a variety of data-related tasks.
          </p>
        </div>
      </div>
      <div>
        <img
          style={{
            paddingTop: "5%",
            paddingBottom: "5%",
            maxWidth: "50%",
            maxHeight: "50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
          src={require("../images/linkedinicon.png")}
          alt="linkedin"
        />
        <div
          style={{
            padding: "50px",
            paddingTop: "0px",
          }}
        >
          <h3>
            <a
              style={{
                color: "#11cbd7",
              }}
              href="https://www.linkedin.com/feed/"
            >
              LinkedIn
            </a>
          </h3>
          <h4>Software Engineering Intern</h4>
          <p>Sept 2022 - Dec 2022</p>
          <p>Sunnyvale, CA</p>
          <p>
            LinkedIn is a professional networking platform that allows users to
            connect with colleagues and professionals in their industry. During
            this internship, I worked on the Media View team as a mobile
            engineering intern. In support of carousels, our new media format I
            took part in designing and implementing preview features to ensure a
            smooth rollout for our users.
          </p>
        </div>
      </div>
      <div>
        <img
          style={{
            paddingTop: "5%",
            paddingBottom: "5%",
            maxWidth: "50%",
            maxHeight: "50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
          src={require("../images/stripe.png")}
          alt="stripe"
        />
        <div
          style={{
            padding: "50px",
            paddingTop: "0px",
          }}
        >
          <h3>
            <a
              style={{
                color: "#11cbd7",
              }}
              href="https://stripe.com/en-ca"
            >
              Stripe
            </a>
          </h3>
          <h4>Software Engineering Intern</h4>
          <p>January 2022 - April 2022</p>
          <p>Seattle, WA</p>
          <p>
            Stripe is a technology company that builds economic infrastructure
            for the internet. During this internship, I worked on critical
            launch blockers to support the team launch of{" "}
            <a href="https://www.linkedin.com/posts/stripe_ach-direct-debit-payments-on-stripe-bank-activity-6914603493336993792-4hFh?utm_source=linkedin_share&utm_medium=member_desktop_webs">
              ACH Direct Debits
            </a>{" "}
            (the second-largest payment method supported by Stripe)
            collaborating with cross-functional teams under a tight timeline.
          </p>
        </div>
      </div>
      <div>
        <img
          style={{
            paddingTop: "5%",
            paddingBottom: "5%",
            maxWidth: "50%",
            maxHeight: "50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
          src={require("../images/ss&c.png")}
          alt="ss&c"
        />
        <div
          style={{
            padding: "50px",
            paddingTop: "0px",
          }}
        >
          <h3>
            <a
              style={{
                color: "#11cbd7",
              }}
              href="https://www.ssctech.com/"
            >
              SS&C Technologies
            </a>
          </h3>
          <h4>Full Stack Developer Intern</h4>
          <p>May 2021 - August 2021</p>
          <p>Toronto, ON</p>
          <p>
            SS&C Technologies is the world’s largest hedge fund and private
            equity administrators, operating a full technology stack across
            securities accounting, office operations and more. As a full stack
            developer I took part in building systems using <b> Java </b>that
            were capable of loading millions of trades daily to be aggregated
            and processed with<b> Apache Nifi </b>.
          </p>
        </div>
      </div>
      <div>
        <img
          style={{
            paddingTop: "5%",
            paddingBottom: "5%",
            maxWidth: "50%",
            maxHeight: "50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
          src={require("../images/hack+.png")}
          alt="hack+ "
        />
        <div
          style={{
            padding: "50px",
            paddingTop: "0px",
          }}
        >
          <h3>
            <a
              style={{
                color: "#11cbd7",
              }}
              href="https://hackplus.io/"
            >
              Hack+
            </a>
          </h3>
          <h4>Software Engineering Intern </h4>
          <p>January 2021 - July 2021</p>
          <p>Fremont, CA (Remote)</p>
          <p>
            Hack+ is a platform that enables students to launch start-ups,
            events and nonprofits. As a software engineering intern, using
            <b> ReactJS </b> I developed our front-end platform that allows
            users to manage their organization and financial transactions in a
            cohesive dashboard. In addition, I worked with <b> Node.js </b> to
            create RESTful endpoints for fetching and creating organization
            data.
          </p>
        </div>
      </div>
    </div>
  );
}

function ExperiencesDesktop() {
  return (
    <div className="experiences">
      <h1
        style={{
          display: "flex",
          paddingTop: "5%",
          paddingLeft: "5%",
          color: "#11cbd7",
        }}
      >
        Experiences
      </h1>

      <div className="job">
        <img
          className="job-photo"
          style={{ maxWidth: "20%", maxHeight: "20%" }}
          src={require("../images/databricksicon.jpeg")}
          alt="databricks"
        />
        <div id="job-description">
          <h3>
            <a
              style={{
                color: "#11cbd7",
              }}
              href="https://www.databricks.com/"
            >
              Databricks
            </a>
          </h3>
          <h4> Software Engineering Intern</h4>
          <p>May 2023 - Sept 2023</p>
          <p>San Francisco, CA</p>
          <p className="job-description">
            Incoming Software Engineering Intern on the Search Infrastructure
            Team. Databricks is a cloud-based data analytics and artificial
            intelligence (AI) platform that provides an integrated workspace for
            data engineers, data scientists, and business analysts to
            collaborate and perform a variety of data-related tasks.
          </p>
        </div>
      </div>

      <div className="job">
        <img
          className="job-photo"
          style={{ maxWidth: "20%", maxHeight: "20%" }}
          src={require("../images/linkedinicon.png")}
          alt="linkedin"
        />
        <div id="job-description">
          <h3>
            <a
              style={{
                color: "#11cbd7",
              }}
              href="https://www.linkedin.com/feed/"
            >
              LinkedIn
            </a>
          </h3>
          <h4> Software Engineering Intern</h4>
          <p>Sept 2022 - Dec 2022</p>
          <p>Sunnyvale, CA</p>
          <p className="job-description">
            LinkedIn is a professional networking platform that allows users to
            connect with colleagues and professionals in their industry. During
            this internship, I worked on the Media View team as a mobile
            engineering intern. In support of carousels, our new media format, I
            took part in designing and implementing preview features to ensure a
            smooth rollout for our users.
          </p>
        </div>
      </div>

      <div className="job">
        <img
          className="job-photo"
          style={{ maxWidth: "20%", maxHeight: "20%" }}
          src={require("../images/stripe.png")}
          alt="stripe"
        />
        <div id="job-description">
          <h3>
            <a
              style={{
                color: "#11cbd7",
              }}
              href="https://stripe.com/en-ca"
            >
              Stripe
            </a>
          </h3>
          <h4> Software Engineering Intern</h4>
          <p>January 2022 - April 2022</p>
          <p>Seattle, WA</p>
          <p className="job-description">
            Stripe is a technology company that builds economic infrastructure
            for the internet. During this internship, I worked on critical
            launch blockers to support the team launch of{" "}
            <a href="https://www.linkedin.com/posts/stripe_ach-direct-debit-payments-on-stripe-bank-activity-6914603493336993792-4hFh?utm_source=linkedin_share&utm_medium=member_desktop_web">
              ACH Direct Debits
            </a>{" "}
            (the second-largest payment method supported by Stripe)
            collaborating with cross-functional teams under a tight timeline.
          </p>
        </div>
      </div>

      <div className="job">
        <img
          className="job-photo"
          style={{ maxWidth: "20%", maxHeight: "20%" }}
          src={require("../images/ss&c.png")}
          alt="ss&c"
        />
        <div id="job-description">
          <h3>
            <a
              style={{
                color: "#11cbd7",
              }}
              href="https://www.ssctech.com/"
            >
              SS&C Technologies
            </a>
          </h3>
          <h4>Full Stack Developer Intern</h4>
          <p>May 2021 - August 2021</p>
          <p>Toronto, ON</p>
          <p className="job-description">
            SS&C Technologies is the world’s largest hedge fund and private
            equity administrators, operating a full technology stack across
            securities accounting, office operations and more. As a full stack
            developer I took part in building systems using <b> Java </b>that
            were capable of loading millions of trades daily to be aggregated
            and processed with<b> Apache Nifi </b>.
          </p>
        </div>
      </div>
      <div className="job">
        <img
          className="job-photo"
          style={{ maxWidth: "20%", maxHeight: "20%" }}
          src={require("../images/hack+.png")}
          alt="hack+ "
        />
        <div id="job-description">
          <h3>
            <a
              style={{
                color: "#11cbd7",
              }}
              href="https://hackplus.io/"
            >
              Hack+
            </a>
          </h3>
          <h4>Software Engineering Intern </h4>
          <p>January 2021 - July 2021</p>
          <p>Fremont, CA (Remote)</p>
          <p className="job-description">
            Hack+ is a platform that enables students to launch start-ups,
            events and nonprofits. As a software engineering intern, using
            <b> ReactJS </b> I developed our front-end platform that allows
            users to manage their organization and financial transactions in a
            cohesive dashboard. In addition, I worked with <b> Node.js </b> to
            create RESTful endpoints for fetching and creating organization
            data.
          </p>
        </div>
      </div>
    </div>
  );
}
