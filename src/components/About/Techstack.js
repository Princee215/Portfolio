import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div className="overlay">
          <div className="fadeText">
            C++
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="overlay">
          <div className="fadeText">
            Javascript
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="overlay">
          <div className="fadeText">
            ReactJS
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="overlay">
          <div className="fadeText">
            NodeJS
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="overlay">
          <div className="fadeText">
            MongoDB
          </div>
        </div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="overlay">
          <div className="fadeText">
            Git
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <div className="overlay">
          <div className="fadeText">
            MySQL
          </div>
        </div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col> */}
     </Row>
  );
}

export default Techstack;
