import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillMail,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              I fell in love with programming and I have at least learnt
              something, I think... 🤷‍♂️
              <br />
              <br />
              Hi Everyone, I am <b className="purple"> Prince, </b> a student pursuing Integrated Masters and Bachelors in 
              Information Technology at the <b className="purple"> Indian Institute of Information Technology (IIIT) Gwalior, India. </b> 
              I am also a <b className="purple">Software engineer, </b> and love to build products which can produce impact 
              at scale.
              <br />
              <br />
              I am currently focused on growing as a Developer specifically in <b className="purple"> Front-end engineering </b>
              and broadening my knowledge about it.
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="mailto:princeesingh215@gmail.com"
                target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
              >
                <AiFillMail />
              </a>
            </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Princee215"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/princesingh215/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/i.ammprincee/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
