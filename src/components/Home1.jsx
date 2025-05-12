import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container>
      <Row>
        <Col md={20} className="home-about-description">
          <h1
            style={{ fontSize: "2.6em", marginTop: "10%", marginBottom: "5%" }}
          >
            A LITTLE ABOUT ME
          </h1>
          <p className="home-about-body">
            Ever since I discovered programming, it has been an exciting journey
            of creativity and problem-solving. I am passionate about learning
            and continually improving my skills to stay at the forefront of the
            tech world. 🚀
            <br />
            <br />I have a solid foundation in languages like
            <i>
              <b className="yellow"> C, C++, and JavaScript.</b>
            </i>
            <br />
            <br />
            <i>
              I am always eager to learn new technologies and frameworks to
              enhance my capabilities. To fuel this passion, I've pursued
              certifications from renowned platforms like{" "}
              <b className="yellow">freeCodeCamp</b>, where I've earned
              credentials that validate my knowledge and commitment to
              self-improvement.
            </i>
            <br />
            <br />I enjoy applying my knowledge in real-world projects using{" "}
            <b className="yellow">HTML, CSS, and Vanilla JavaScript</b>, along
            with powerful modern libraries such as{" "}
            <i>
              <b className="yellow">React.js</b>
            </i>. I also have backend development experience using{" "}
            <i>
              <b className="yellow">Node.js</b>
            </i> and{" "}
            <i>
              <b className="yellow">Express.js</b>
            </i>. My goal is to develop impactful, user-friendly web applications
            while continuously growing as a developer.

          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>LET'S CONNECT</h1>
          <p>
            Feel free to <span className="yellow">reach out</span> and connect
            with me!
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/fouaouri"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/fatima-ezzahra-ouaourikt-5a7139274/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
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
