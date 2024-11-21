import React from 'react'
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Container, Row, Col } from 'react-bootstrap'
import myImg from "../assets/woman.png";

const About1 = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <Col md={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 20 }}>
          <p style={{paddingBottom: 20, textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fatima Ezzahra Ouaourikt</span><br/> my friends call me <span className="purple"> Titim  </span>
            from <span className="purple"> Marrakesh, Morroco.</span>
            <br />
            I am currently IT architecture Student at UM6P-1337 coding school.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          {/* <Col md={5} style={{ paddingBottom: 20 }}> */}
                    <img
                        src={myImg}
                        alt="home pic"
                        className="img-fluid"
                        style={{ position: "absolute", right:"5%", top:"-5%",maxHeight: "70%"}}
                    />
                    {/* </Col> */}
          
          </Col>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I enjoy playing volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" , paddingTop:"10%"}}>
            "Driven to create impactful solutions that leave a mark on the world!"{" "}
          </p>
          <footer className="blockquote-footer">Titim</footer>
        </blockquote>

      </Card.Body>
    </Card>
  )
}

export default About1
