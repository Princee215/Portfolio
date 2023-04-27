import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import theBestHouse from "../../Assets/Projects/theBestHouse.png";
import personna from "../../Assets/Projects/personna.png";
import explodingKitten from "../../Assets/Projects/explodingKitten.png";
import googleKeeper from "../../Assets/Projects/googleKeeper.png";
import myPaint from "../../Assets/Projects/myPaint.png";
import dailyJournal from "../../Assets/Projects/dailyJournal.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dailyJournal}
              isBlog={false}
              title="Daily Journal"
              description="A place where people can compose blogs about any relevant topic 
              or share a story with friends, built with NodeJS, ExpressJS, MongoDB & EJS templating used 
              for multiple-page websites. Have features that allow every blog to have its 
              dynamic route. Deployed it over the Heroku platform."
              link="https://github.com/Princee215/Daily-Journal"
              // demoLink="https://xyz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theBestHouse}
              isBlog={false}
              title="The Best House"
              description="A single-page application built using ReactJS where we input the 
              size of a housing layout and recommend the best-suited house for rent in the 
              layout. The score for each house is calculated based on the availability of 
              services(Restaurant, Gym, Hospital) nearby."
              link="https://github.com/Princee215/The-Best-House"
              // demoLink="https://xyz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personna}
              isBlog={false}
              title="Personna"
              description="Trained an RNN classifier using the ‘Mypersonalitycafe.com dataset'.
               The classifier successfully classified people into their Myers-Briggs Type 
               Index(MBTI) personality type. And the highest accuracy obtained with the model 
               was 80.1%. Experimented with various types of RNNs and their performances were compared."
               link="https://github.com/Princee215/Predicting-Myers-Briggs-Type-Indicator-with-Recurrent-Neural-Networks"
              // demoLink="https://xyz/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={explodingKitten}
              isBlog={false}
              title="Exploding Kitten"
              description="An online single-player card game that is developed using ReactJS 
              with an logic on backend using NodeJS and ExpressJS where we assign 5 random 
              cards to each user and he'll draw one by one from the deck till he lose or win. 
              We Automatically save the game for a user at every stage so the user can continue 
              from where he left off last time."
              link="https://github.com/Princee215/Exploding-Kitten"
              // demoLink="https://xyz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googleKeeper}
              isBlog={false}
              title="Google Keeper"
              description="Designed a web app similar to Google Keeper where you can add 
              notes and delete them on the fly. Used ReactJS for the frontend and deployed 
              it over vercel."
              link="https://github.com/Princee215/Keeper-App"
              // demoLink="https://xyz" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myPaint}
              isBlog={false}
              title="MyPaint"
              description="Created an App similar to Paint App having Authentication for the 
              users and stored all the authentication details onto cloud after hashing. Using 
              EJS Templating for the UI and for the logic part we had backend consisting of NodeJS and ExpressJS."
              link="https://github.com/Princee215/MyPaint"
              // demoLink="https://xyz"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
