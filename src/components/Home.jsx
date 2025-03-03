
import {dwoman} from '../assets'
import Type from './Type.jsx'
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./particle.jsx";
import Home1 from "./Home1.jsx";
const Home = () => {
  return (
    <section>
        <Container fluid className="home-section" id="home">
            <Particle />
            <Container className="home-content">
                <Row style={{ paddingTop: "10%", paddingBottom: "10%" }}>
                    <Col md={7} className="home-header">
                    <h1 style={{ paddingBottom: 15 }} className="heading">
                        Hello and Welcome!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </h1>

                    <h1 className="heading-name">
                        I'm <strong className="main-name">Fatima Ezzahra Ouaourikt</strong> <br/>a passionate Front-End developer.
                        
                    </h1>

                        <div style={{ padding: 50, textAlign: "left", fontSize: "80%" }}>
                            <Type />
                        </div>
                    </Col>
                    <Col md={5} style={{ paddingBottom: 20 }}>
                    <img
                        src={dwoman}
                        alt="home pic"
                        className="img-fluid"
                        style={{
                            marginLeft: "10%",
                            maxWidth: "100%",
                            height: "auto",
                            marginTop: "25%",
                            maxHeight: "500px",
                            backgroundSize: "cover",
                            animation: "profile_animate 5s ease-in-out infinite 1s",
                            boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.9)"
                        }}
                    />
                    </Col>
                </Row>
                <Home1 />
            </Container>
        </Container>
    </section>
  )
}

export default Home