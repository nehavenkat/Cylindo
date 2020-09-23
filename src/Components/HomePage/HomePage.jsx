import React, { Component } from "react";
import Banner from "../Images/Banner.png";
import { Container } from "reactstrap";
import "../HomePage/HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        {/* <h1>Cylindo</h1> */}
        <img
          className="bg"
          src={Banner}
          alt="furniture"
          width="700"
          height="500"
        />
      </Container>
    );
  }
}
