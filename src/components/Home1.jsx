import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/woman.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container>
      <Row>
        <Col md={20} className="home-about-description">
          <h1
            style={{ fontSize: "2.6em", marginTop: "10%", marginBottom: "5%" }}
          >
            LET ME INTRODUCE MYSELF
          </h1>
          <p className="home-about-body">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <br />
            <br />I am fluent in classics like
            <i>
              <b className="yellow"> C, C++ and Javascript. </b>
            </i>
            <br />
            <br />
            <i>
              I am passionate about learning new{" "}
              <b className="yellow">programming languages </b>and am eager to
              work in a team environment where I can continually acquire new
              skills and further develop my abilities.
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with <b className="yellow">HTML, CSS, Vanilla JavaScript</b> and
            <i>
              <b className="yellow">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="yellow"> React.js</b>
            </i>
          </p>
        </Col>
        {/* <img src={myImg} className="img-fluid1" alt="avatar" /> */}
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="yellow">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/fouaouri"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/fatima-ezzahra-ouaourikt-5a7139274/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
export default Home2;
