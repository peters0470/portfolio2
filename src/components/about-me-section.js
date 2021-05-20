import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "./title";
import ContactMeIcon from "./icons-contact-me";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <Container id="about-me" fluid>
        <Title title={"About Me"} />
        <Row>
          <Col lg={1}></Col>
          <Col md={3}>
            <Image
              src={process.env.PUBLIC_URL + "/images/Headshot.jpg"} height= "200px" width="200px"
            />
          </Col>

          <Col md={9} lg={6} className="mt-3" style={{ color: "#747373", fontSize: "18px" }}>
            {
              "Full Stack Web Developer with a background in management and the culinary arts. ​Recently obtained a Certificate in Full Stack Web Development from University of Texas. As an enthusiastid learner and natural leader, I am excited to use my technical skills and collaborative nature to write cleaner code, identify errors, and help your team to continue to develop innovative, and exciting work. Self starter and recognized problem-solver that thrives in fast-paced and quality-driven environments."}
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;