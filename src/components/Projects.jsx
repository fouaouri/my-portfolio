import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Particle from "./particle.jsx";
import Cub3d from "../assets/3d.png";
import Inception from "../assets/docker.png";
import webServe from "../assets/webserver.png";
import Transendance from "../assets/ping-png.png";
import CardGame from "../assets/cardicon.png";
import Dragon from "../assets/DragonScreen.mp4";
// import Dragon2 from "../assets/dragon-2.png";
// import Dragon3 from "../assets/dragon-3.png";
// import Dragon4 from "../assets/dragon-4.png";
// import Dragon5 from "../assets/dragon-5.png";
// import Dragon6 from "../assets/dragon-6.png";
import Map3D from "../assets/cubScreen.mp4";
import CardGame1 from "../assets/memory-card1.png";
import CardGame2 from "../assets/memory-card2.png";



const projectDetails = [
  {
    id: 1,
    title: "Dragon-Pong",
    img: Transendance,
    description: "This project is focused on developing a fully responsive front-end application using core web technologies: HTML, CSS, and vanilla JavaScript. It aims to provide an in-depth understanding of building a modern front-end interface that is adaptable to various screen sizes and devices. One of the primary goals of this project is to ensure that the application is responsive, meaning that it should provide an optimal viewing and interaction experience across different platforms, including desktops, tablets, and mobile devices. This is achieved through effective use of CSS media queries, flexible layouts, and fluid design elements that adjust based on the viewport size. Additionally, the project includes user authentication, which is a critical aspect of modern web applications. Users can securely log in and access their personalized content, making the application more interactive and tailored to their needs. By implementing authentication, you will learn how to handle sensitive information securely and manage sessions, ensuring that only authorized users can access certain features. JavaScript is used to manage user interactions, handle form validations, and dynamically update the UI without reloading the page By working with these fundamental technologies, the project provides a hands-on learning experience in front-end development without the use of third-party frameworks. This approach helps you sharpen your skills in responsive design, client-side interactivity, and security. In the process, you'll gain practical knowledge of how to build a seamless user experience, handle user input effectively, and ensure the app remains accessible across different devices. Ultimately, this project will strengthen your web development capabilities and make you more comfortable in creating fully functional, dynamic, and secure front-end applications.",
    github: 'https://github.com/fouaouri/Dragon-Ping/tree/main',
    assets: [Dragon]
  },
  {
    id: 2,
    title: "Memory Card",
    img: CardGame,
    description: "This is a simple memory card game built using HTML, CSS, and vanilla JavaScript. The objective of the game is to match pairs of cards by flipping them over two at a time. Players need to remember the location of cards they've already seen in order to match them with the corresponding ones. The game features a responsive design, making it playable across various devices. With a clean and interactive user interface, this game offers a fun and challenging experience while showcasing the power of basic web technologies.",
    github: 'https://github.com/fouaouri/Memory-Cards',
    assets: [CardGame1, CardGame2]
  },
  {
    id: 3,
    title: "RayMap3D",
    img: Cub3d,
    description: "RayMap3D is a project inspired by the legendary 90's game that introduced the world to the first-ever First-Person Shooter (FPS). This game was a pioneering step in 3D gaming, and Cub3D aims to bring that experience to life using ray-casting. The goal of this project is to explore the concept of ray-casting and apply it to create a dynamic, immersive 3D environment inside a 2D maze. The player will navigate through the maze, using ray-casting techniques to generate a first-person perspective of the world, creating the illusion of depth and movement. This project involves building the core logic behind a 3D maze, focusing on the essentials like calculating ray intersections with walls and objects, simulating player movement, and rendering the scene efficiently. Ray-casting, a technique first used in early 3D games, is employed to draw walls and objects as seen from the player’s viewpoint. The project also covers other key game development aspects, such as texture mapping, calculating lighting effects, and optimizing the game's performance. Cub3D is not only a technical challenge but also a tribute to the ingenuity of the early developers who pioneered 3D game development. It requires strong problem-solving skills and a deep understanding of game mechanics and rendering techniques, offering a comprehensive introduction to game design and computer graphics. The project ultimately provides valuable insight into how 3D games are structured, both in terms of their visual presentation and the underlying code that powers them.",
    github: 'https://github.com/fouaouri/girly_cub',
    assets: [Map3D]
  },
  {
    id: 4,
    title: "DockMaster",
    img: Inception,
    description: "This project is designed to deepen your understanding of system administration by leveraging Docker. The main objective is to explore the concept of containerization and virtualization, focusing on creating and managing multiple Docker images. By working with Docker, you'll gain hands-on experience in building and deploying containerized applications within isolated environments. Additionally, the project involves setting up a personal virtual machine (VM), where you'll host the Docker images and manage their configurations. This exercise not only enhances your technical skills in container orchestration but also provides an opportunity to practice advanced system management techniques, such as resource allocation, network configuration, and data persistence within Docker containers. You'll gain insights into how Docker can be used for scalable and efficient deployment across different environments. The project is an essential step for anyone looking to specialize in DevOps, cloud computing, or modern infrastructure management, as Docker has become an industry-standard tool for creating lightweight, portable, and reproducible environments for software applications.",
    github: 'https://github.com/fouaouri/Dragon-Ping/tree/main',
    assets: []
  },
  {
    id: 5,
    title: "ServerX",
    img: webServe,
    description: "This project is designed to help you gain a deeper understanding of how the HTTP protocol functions by having you build your own HTTP server. By developing this server, you will learn the fundamental principles behind request-response communication, which is the backbone of web browsing. As part of the project, you will test your server with a real browser, allowing you to observe how it handles different HTTP methods such as GET, POST, PUT, and DELETE. This hands-on experience will give you insights into topics like request parsing, header management, response codes, and data transmission. Even if you don’t plan on working directly on web development, understanding the inner workings of HTTP will be an invaluable skill. The knowledge gained from creating your own server will also improve your ability to troubleshoot network issues, optimize server performance, and understand security vulnerabilities, making this project an essential learning experience for anyone interested in systems programming, networking, or backend development. Furthermore, it will provide you with a solid foundation in how web servers operate, which is crucial for anyone working with modern web technologies.",
    github: 'https://github.com/fouaouri/Dragon-Ping/tree/main',
    assets: [] // Added image for the modal
  }
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();  // Initialize navigate using useNavigate hook

  const handleShow = (project) => {
    console.log(project);
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row style={{ justifyContent: "center" }}>
            <Col
              md={3}
              style={{
                justifyContent: "center",
                paddingTop: "5%",
                paddingBottom: "5%",
              }}
            >
              <h1
                style={{
                  fontSize: "300%",
                  paddingBottom: "50px",
                  color: "white",
                }}
              >
                🔥 My Projects
              </h1>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            {projectDetails.map((project) => (
              <Col md={6} lg={4} xl={3} style={{ paddingBottom: 20 }} key={project.id}>
                <Card
                  className="img-fluid"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                    margin: "10px",
                    backgroundColor: "#f2e396",
                  }}
                  onClick={() => handleShow(project)}
                >
                  <Card.Img
                    variant="top"
                    src={project.img}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "10px 10px 0 0",
                    }}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title style={{ color: "#000000" }}>
                      {project.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* Modal for project details */}
      <Modal show={showModal} onHide={handleClose} centered style={{display : "flex", alignItems: "center", width: '1500px'}} >
        {selectedProject && (
          <>
            <Modal.Header closeButton style={{
              maxWidth: "1400px",
              width: '1000px',
              height: "60px",
              paddingRight: "10px",
              backgroundColor: "white"
              }}>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                display: "flex",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "1400px",
              width: '1000px',
              height: "800px",
              overflowY: "auto",
              paddingRight: "10px",
              backgroundColor: "white"
              }}
            >
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                style={{
                  width: "30%",
                  borderRadius: "10px",
                  marginBottom: "15px",
                  backgroundColor: "#ebeb06b9",
                }}
              />
              <p style={{ marginTop: "5%", fontSize: "120%" }}>
                {selectedProject.description}
              </p>

              {/* Loop through the assets and display additional images */}
              {selectedProject.assets.length > 0 && (
                <div style={{ marginTop: "20px", color:"#9d9e66" }}>
                  <h5>Project Preview : </h5>
                  <div className="image-gallery" style={{ display: "flex", justifyContent: "center",flexWrap: "wrap", gap: "10px"}}>
                  {selectedProject.assets.map((asset, index) => {
                      console.log("Assets: ", selectedProject.assets);
                      console.log("Asset at index 3: ", selectedProject.assets[3]);
                      const isVideo = asset.endsWith('.mov') || asset.endsWith('.mp4');

                      return isVideo ? (
                        <video key={index} width="100%" height="auto" controls>
                          <source src={asset} type={`video/${asset.split('.').pop()}`} />
                        </video>
                      ) : (
                        <img
                          key={index}
                          src={asset}
                          alt={`asset-${index}`}
                          style={{
                            width: "400px",
                            height: "220px",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer style={{
              maxWidth: "1400px",
              width: '1000px',
              height: "60px",
              paddingRight: "10px",
              backgroundColor: "white"
              }}>
              <Button
                variant="secondary"
                onClick={() => {
                  // Navigate to the GitHub link
                  window.open(selectedProject.github, '_blank');
                }}
              >
                Visit GitHub
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
