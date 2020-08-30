import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

function Project() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          paddingTop: "15%",
          paddingLeft: "5%",
          color: "#11cbd7",
        }}
      >
        Projects
      </h1>
      <CardDeck
        style={{
          display: "flex",
          paddingRight: "5%",
          paddingLeft: "3%",
          paddingTop: "3%",
        }}
      >
        <Card
          style={{
            maxWidth: "30rem",
            maxHeight: "50rem",
            marginBottom: "5%",
            marginRight: "5%",
            marginLeft: "5%",
            border: "3px solid",
            borderColor: "#ef476f",
          }}
        >
          <Card.Img
            style={{ maxHeight: "20rem" }}
            variant="top"
            src={require("../images/shoppingbuddy.png")}
          />
          <Card.Body>
            <Card.Title>Shopping Buddy</Card.Title>
            <Card.Text>
              A website that lets you track any prices of products currently in
              your cart and alerts you about ongoing sales.
            </Card.Text>
            <Button variant="primary">Demo</Button>{" "}
            <Button variant="primary">Github</Button>{" "}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              #Javascript #React.js #Node.js #Puppeteer
            </small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            maxWidth: "30rem",
            maxHeight: "50rem",
            marginBottom: "5%",
            border: "3px solid",
            borderColor: "#06d6a0",
          }}
        >
          <Card.Img
            style={{ maxHeight: "17rem" }}
            variant="top"
            src={require("../images/blossom.jpg")}
          />
          <Card.Body>
            <Card.Title>Blossom</Card.Title>
            <Card.Text>
              A pocket garden as an IOS app! Visually recognise any plants or
              diagnosis your plants health by uploading a photo, and keep a
              collection of your plant history as well as special flowers you've
              seen around the world!
            </Card.Text>
            <Button variant="primary">Demo</Button>{" "}
            <Button variant="primary">Github</Button>{" "}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              #SwiftUI #Watson Visual Recognition
            </small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            maxWidth: "30rem",
            maxHeight: "50rem",
            marginBottom: "5%",
            marginLeft: "5%",
            border: "3px solid",
            borderColor: "#5ca8ff",
          }}
        >
          <Card.Img
            variant="top"
            src={require("../images/diagnosisbot.png")}
            style={{ maxHeight: "17rem" }}
          />
          <Card.Body>
            <Card.Title>Diagnosis Bot</Card.Title>
            <Card.Text>
              Diagnosis Bot is a chatbot that is designed to give users a short,
              safe an anonymous health checkup simply from their app.
            </Card.Text>
            <Button variant="primary">Demo</Button>{" "}
            <Button variant="primary">Github</Button>{" "}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              #Java #Android Studio #Infermedica API
            </small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <CardDeck
        style={{
          display: "flex",
          paddingRight: "5%",
          paddingLeft: "3%",
          paddingTop: "3%",
        }}
      >
        <Card
          style={{
            maxWidth: "30rem",
            maxHeight: "50rem",
            marginBottom: "5%",
            marginLeft: "5%",
            border: "3px solid",
            borderColor: "#118ab2",
          }}
        >
          <Card.Img
            variant="top"
            src={require("../images/cloudchat.png")}
            style={{ maxHeight: "17rem" }}
          />
          <Card.Body>
            <Card.Title>Cloud Chat</Card.Title>
            <Card.Text>
              Cloud Chat is a live messaging android application designed to
              connect groups of people with similar interests.
            </Card.Text>
            <Button variant="primary">Demo</Button>{" "}
            <Button variant="primary">Github</Button>{" "}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              #Java #Android Studio #Socket.io
            </small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            maxWidth: "30rem",
            maxHeight: "50rem",
            marginBottom: "5%",
            marginRight: "5%",
            marginLeft: "5%",
            border: "3px solid",
            borderColor: "#073b4c",
          }}
        >
          <Card.Img
            style={{ maxHeight: "20rem" }}
            variant="top"
            src={require("../images/ambitionsimulator.png")}
          />
          <Card.Body>
            <Card.Title>Ambition Simulator</Card.Title>
            <Card.Text>
              A game developed by a team of students that teaches players how to
              develop their budgeting, investment, and money management skills
              as a method to promote financial literacy.
            </Card.Text>
            <Button variant="primary">Demo</Button>{" "}
            <Button variant="primary">Github</Button>{" "}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              #C# #Unity Game Engine #Unity Cloud Github
            </small>
          </Card.Footer>
        </Card>
        <Card
          style={{
            maxWidth: "30rem",
            maxHeight: "50rem",
            marginBottom: "5%",
            border: "3px solid",
            borderColor: "#ffaf59",
          }}
        >
          <Card.Img variant="top" src={require("../images/mealrelief.jpg")} />
          <Card.Body>
            <Card.Title>MealRelief</Card.Title>
            <Card.Text>
              MealRelief is available as a web application to allows food
              providers (like restaurants and grocery stores) to donate servings
              of fresh, edible meals that would otherwise become food waste.
              Users can then search for food near their location and anonymously
              claim free meals.
            </Card.Text>
            <Button variant="primary">Demo</Button>{" "}
            <Button variant="primary">Github</Button>{" "}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">#Javascript #React #Azure Maps</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Project;
