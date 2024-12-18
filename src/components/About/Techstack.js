import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsAndroid } from "react-icons/bs";
import {
  DiJava,
  DiJavascript1,
  DiNodejs,
  DiReact
} from "react-icons/di";
import {
  SiFirebase,
  SiLinux,
  SiSpringboot
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>


     
     
     
    </Row>
  );
}

export default Techstack;
