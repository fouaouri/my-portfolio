import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./particle";
import About1 from "./About1";
import ProfessionalS from "./ProfessionalS";
import pdf from "../assets/Ouaourikt_fCV.pdf";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const About = () => {
  return (
    <Container fluid className="home-section" id="home">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "10%",
              paddingBottom: "5%",
            }}
          >
            <h1
              style={{
                fontSize: "200%",
                paddingBottom: "50px",
                color: "white",
              }}
            >
              Know Who <strong className="yellow">I'M</strong>
            </h1>
          </Col>
          <About1 />
        </Row>
        <h1
          style={{
            justifyContent: "center",
            position: "relative",
            paddingBottom: "5%",
            marginTop: "20%",
          }}
          className="project-heading"
        >
          Professional skills
        </h1>
        <ProfessionalS />
        <h1 className="project-heading">Resume</h1>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            paddingBottom: "5%",
            paddingTop: "5%",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
              Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
