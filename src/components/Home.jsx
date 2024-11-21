import styles from '../style'
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
                <Row>
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                        Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                        </span>
                        </h1>

                        <h1 className="heading-name">
                            I'M
                            <strong className="main-name"> SOUMYAJIT BEHERA</strong>
                        </h1>

                        <div style={{ padding: 50, textAlign: "left" }}>
                            <Type />
                        </div>
                    </Col>
                    <Col md={5} style={{ paddingBottom: 20 }}>
                    <img
                        src={dwoman}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "500px" }}
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