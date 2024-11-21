import React from 'react'
import { Container,Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";

import {
    DiJavascript1,
    DiReact,
    DiGit,
} from "react-icons/di";

import { SiC } from "react-icons/si";

const ProfessionalS = () => {
  return (
    <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus className='icons-center' style={{ color: "#FFFFFF"}} />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiC className='icons-center' color="#FFFFFF"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiGit className='icons-center' color="#FFFFFF"/>
            </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 className='icons-center' color="#FFFFFF"/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiReact className='icons-center' color="#FFFFFF"/>
            </Col>
        </Row>
    
  </Container>
  )
}

export default ProfessionalS
