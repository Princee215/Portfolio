import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm an engineering student at <span className="purple">IIIT Gwalior </span> 
            graduating in Spring 2023 with an Integrated Masters in Information Technology. I have 
            been exploring and working 
            in the technology space, specifically in <span className="purple">Software Engineering </span>
            and <span className="purple">Front-end Engineering </span>, 
            for the past 4 years since I began my engineering. And my experience in Software 
            Engineering is an amalgamation of previous internship experiences, personal projects, 
            and hackathon participations. I love developing solutions on ideas to harness technology 
            for tackling real-time challenges and love to build products which can produce impact at 
            scale.

            <br />
            <br />

            I like to learn and feed my curiosity on numerous skills of the technical 
            world and think along the lines of clean, maintainable, and scalable code, 
            mainly in <span className="purple">C++ </span> and <span className="purple">Javascript</span>. 
            My skills have been portrayed and enhanced 
            in the internship I have worked at, namely <span className="purple">Software Engineering 
            Intern </span>at EDBY. 
            That internship have given me experiences ranging from working as a 
            <span className="purple">professional </span>, to <span className="purple">collaborating 
            in teams </span>, allowing me to share my ideas 
            and gain tremendous experience to mold them into deliverable solutions 
            while quickly learning and <span className="purple">adapting </span> to the various 
            codebases and technologies used at these organizations.
            <br />
            I strive to be an active <span className="purple">team player</span> with a can-do attitude 
            leveraging my <span className="purple">problem solving</span> and <span className="purple">leadership</span> skills.
            My extrovert attitude helps me amplify my <span className="purple">communication</span> and <span className="purple">socializing</span> skills.

            <br />
            <br />

            Outside of the technical world, when I am not on my laptop I like <span className="purple">swimming</span> and <span className="purple">cycling</span>. 
              I am a <span className="purple">social person</span> and I like to hang out with friends and family as well as meet new people. 
              I am also a <span className="purple">movie buff</span>, <i>so hit me up for movie nights</i> !

          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is like humor. When you have to explain it, it's bad."{" "}
          </p>
          <footer className="blockquote-footer">Prince</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
