import React from 'react'
import { Container,Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiC, SiHtml5, SiTailwindcss } from "react-icons/si";
import {
    DiJavascript1,
    DiReact,
    DiGit,
    DiCss3
} from "react-icons/di";

const ProfessionalS = () => {
  return (
    <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus className='icons-center' />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiC className='icons-center' />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiGit className='icons-center' />
            </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 className='icons-center' />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiReact className='icons-center' />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 className="icons-center"  /> {/* CSS */}
            </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
            <SiHtml5 className="icons-center"  /> {/* HTML */}
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiTailwindcss className="icons-center"  /> {/* TailwindCSS */}
            </Col>
        </Row>
  </Container>
  )
}

export default ProfessionalS
