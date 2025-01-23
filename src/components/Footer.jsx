import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <Row>
        <Col className="footer-body">
          <ul className="home-about-social-links">
            <li className='social-icons1'>
              <a
                href="https://github.com/fouaouri"
                style={{ color : "white"}}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillGithub/>
              </a>
            </li>
          
            <li className='social-icons1'>
              <a
                href="https://www.linkedin.com/in/fatima-ezzahra-ouaourikt-5a7139274/"
                style={{ color : "white"}}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedinIn/>
              </a>
            </li>   
            <li className='social-icons1'>
              <a
                href="https://x.com/OuaouriktE"
                style={{ color : "white"}}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineTwitter/>
              </a>
            </li>
          
            <li className='social-icons1'>
              <a
                href="https://www.instagram.com/thisisezzahra/"
                style={{ color : "white"}}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillInstagram/>
              </a>
            </li>
          </ul>
        </Col>    

      </Row>
    </div>
  )
}

export default Footer
