import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myimg.png";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hey there! 👋 I'm  <span className="purple">Ashis,</span> a passionate programmer deeply immersed in the world of web technologies and product development
              <br />
              <br />With a solid foundation in classics like 
              <i>
                <b className="purple"> Java , Javascript and Python. </b>
              </i>
              I've found my calling in building cutting-edge web technologies and innovative products.
              <br />
              <br />
              My journey in programming has led me to explore various realms, 
              but my heart truly lies in crafting solutions that push the boundaries of what's 
              possible on the web. Whether it's architecting robust backend systems  or crafting seamless user experiences with modern JavaScript libraries and frameworks , 
              I thrive on turning ideas into tangible, impactful products.

              <br />
              <br />
              Beyond traditional web development, I'm also captivated by the transformative potential of{" "}
                <i>
                  <b className="purple">
                  Artificial Intelligence and Machine Learning.{" "}
                </b>
              </i>
              Exploring its applications and delving into the intricacies of decentralized systems excites me to no end.
              <br />
              <br />
              Let's create experiences that resonate and drive change. If you're passionate about innovation and pushing boundaries, let's collaborate on something extraordinary.
               Together, we'll build the future! 🚀
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ashis541"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ashisrout541/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashisrout541/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_.a_s_h_i_s._/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
