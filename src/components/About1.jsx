import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/woman.png";

const About1 = () => {
  return (
    <Card style={{ backgroundColor: "#000000", borderRadius: "15px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <Container>
            <Row
              className="align-items-center"
              style={{ justifyContent: "Left" }}
            >
              <p
                style={{
                  paddingTop: "2%",
				  color: "white",
                  paddingBottom: "5%",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  lineHeight: "1.8",
                }}
              >
                Hello and welcome! My name is{" "}
                <span className="yellow">Fatima Ezzahra Ouaourikt</span>, but
                most people know me as <span className="yellow">Titim</span>.
                <br /> I hail from the vibrant city of Marrakesh, Morocco, a
                place filled with culture, energy, and inspiration.
                <br />
                Currently, I am pursuing my studies in IT Architecture at{" "}
                <span className="yellow">UM6P-1337 Coding School</span>, where I
                am deeply immersed in the world of technology and innovation.
                <br />
                My journey has been driven by a passion for problem-solving and
                creating impactful solutions that combine logic and creativity.
                <br />
                When I’m not coding or working on projects, you’ll often find me
                enjoying
                <br /> a variety of activities that keep me inspired and
                energized. I love:
                <ul style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: "10%" }}>
                  <li className="about-activity">
                    ➡️ Playing volleyball, a sport that challenges both my
                    teamwork and agility.
                  </li>
                  <li className="about-activity">
                    📚 Diving into books, exploring stories and ideas that
                    broaden my horizons
                  </li>
                  <li className="about-activity">
                    ✈️ Traveling, discovering new places and perspectives that
                    fuel my creativity.
                  </li>
                </ul>
              </p>
            </Row>
          </Container>
          <p style={{ color: "#756f54", paddingTop: "5%" }}>
            "Driven to create impactful solutions that leave a mark on the
            world!"{" "}
          </p>
          <footer
            className="blockquote-footer"
            style={{
              justifyContent: "center",
              position: "relative",
              paddingBottom: "5%",
              paddingTop: "1%",
            }}
          >
            Titim
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default About1;
