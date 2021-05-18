import React from "react";
import { MDBFooter } from "mdbreact";
import Icon from "./icon";
import Title from "./title";
import ContactMeIcon from "./icons-contact-me";
import { Container, Row, Col } from 'react-bootstrap';
import SkillIcon from './icons-skills';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "#2C365E" }}
      className="font-small pt-4"
      id="bottom"
    >
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="text-center">
            <Title title={"Contact Me"} />
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="text-center">
            {/* // animation- icons increase size when hovered over */}
            <Icon
              href="https://github.com/peters0470"
              alt="GitHub icon"
              iconPic="fab fa-github"
            />
            <Icon
              href="https://www.linkedin.com/in/ryan-peters-482747112/"
              alt="Linked In icon"
              iconPic="fab fa-linkedin"
            />
            {/* <Icon
              href="https://twitter.com/"
              alt="Twitter icon"
              iconPic="fab fa-twitter"
            /> */}
          </Col>
          <Col md={3}></Col>
        </Row>
        {/* ========================================================================== */}
        <Container fluid>
          <Row noGutters style={{ marginBottom: "15px" }}>
            <Col md={4} className="text-center">
              <SkillIcon name="peters0470@gmail.com" href="mailto:peters0470@gmail.com" alt="Email icon" iconPic="fas fa-envelope" color="000" iconSize="35px" marginTop="15px" fontSize="20px" />
            </Col>
            <Col md={4} className="text-center">
              <SkillIcon name="Resume" href="Resume.pdf" alt="resume icon" iconPic="far fa-file" color="000" iconSize="35px" marginTop="15px" fontSize="20px" />
            </Col>
            <Col md={4} className="text-center">
              <SkillIcon
                name="(830) 992-0911"
                href="tel:8309920911"
                alt="phone icon"
                iconPic="fas fa-mobile-alt"
                color="#fff"
                iconSize="35px"
                marginTop="15px"
                fontSize="20px"
              />
            </Col>

          </Row>

        </Container>
        {/* =================================================================== */}
      </Container>
      <div className="footer-copyright py-3">
        <Row>
          <Container fluid>
            {new Date().getFullYear()} Made by: Ryan Peters
          </Container>
          <Container fluid>
            Built with:{" "}
            <Icon
              href="https://github.com/peters0470/portfolio2.git"
              alt="GitHub icon"
              iconPic="fab fa-github"
            />
            <Icon href="" alt="React Icon" iconPic="fab fa-react" />
            <Icon href="" alt="Node Icon" iconPic="fab fa-node" />
            <Icon href="" alt="Javascript Icon" iconPic="fab fa-js-square" />
            <Icon href="" alt="MDB Icon" iconPic="fab fa-mdb" />
            <Icon href="" alt="Bootstrap Icon" iconPic="fab fa-bootstrap" />
            <Icon
              href=""
              alt="Font Awesome Icon"
              iconPic="fab fa-font-awesome-flag"
            />
          </Container>
        </Row>
      </div>
    </MDBFooter >
  );
};

export default Footer;