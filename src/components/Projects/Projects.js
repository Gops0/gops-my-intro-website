import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import dogs from "../../Assets/Projects/dogs.jpeg";
import gms from "../../Assets/Projects/gms.png";
import quotes from "../../Assets/Projects/quotes.jpeg";

import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container fluid className="project-section">
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "5px",
          backgroundColor: "#6f42c1", // Purple color
          zIndex: 1000,
          transition: "width 0.2s ease-out",
        }}
      />
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={gms}
              isBlog={false}
              title="Grocery Management System"
              description="Developed a cross-platform grocery management system using React Native for the customer-facing
app, and React.js for both the admin and customer panels. Implemented secure user authentication
and session management using JWT tokens and other security techniques, ensuring safe transactions.
The backend, built with Node.js, Express, and MySQL, integrates features like product ﬁltering, cart
management, and order placement. Focused on creating a responsive and intuitive user experience for
both customers and administrators."
              ghLink="https://github.com/Gops0/Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quotes}
              isBlog={false}
              title="Dog API Explorer"
              description="The Dog API Explorer is an Android application that allows users to explore various dog breeds, view breed details, and save favorites for offline access. It features a responsive UI built with ConstraintLayout, seamless API communication using Retrofit and OkHttp, and lifecycle-aware components like LiveData and ViewModel. The app also includes advanced features such as real-time search, the ability to set dog images as wallpapers, and engaging animations with Lottie, providing users with an intuitive and enjoyable experience."
              ghLink="https://github.com/Gops0/DogAPI_wallpaper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dogs}
              isBlog={false}
              title="FavQs Quote App"
              description="The FavQs Quote App is a React web application that lets users explore and save inspiring quotes. It provides an elegant and clean UI, infinite scrolling for browsing quotes, and a seamless search experience. Powered by the FavQs API, the app fetches quote data in real time and utilizes local storage to manage user favorites, delivering an efficient and user-friendly experience for quote enthusiasts."
              ghLink="https://github.com/Gops0/FavQs-Quote-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
