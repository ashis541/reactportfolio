import React, { useState } from 'react'
import picture from "../../Assets/undraw-contact.svg"
import "../../contact.css"
import Particle from '../Particle'
import { Col, Container, Row } from 'react-bootstrap'


export default function Contactme() {


  const [email, setEmail] = useState('ashisrout541@gmail.com');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  
  const handleSendEmail = () => {
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  
    
  return (
  <>
  <Particle/>
   <Container fluid className="about-section ">
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <Row className="justify-content-center">
            <Col md={6}>
              <h3 className="heading mb-4">Let's talk about everything!</h3>
              <p>Got something on your mind? Reach out and let's chat!</p>
              <p><img src={picture} alt="Image" className="img-fluid"/></p>
            </Col>
            <Col md={6}>
              <form className="mb-5" id="contactForm" name="contactForm">
                <Row>
                  <Col md={12} className="form-group">
                    <input type="text"
                     className="form-control" 
                     name="name" id="name"
                      placeholder="Your name"/>
                  </Col>
                </Row>
                {/* <Row>
                  <Col md={12} className="form-group">
                    <input type="email"
                     className="form-control"
                     name="email" id="email" 
                     placeholder="Email"
                     onChange={(e) => setEmail(e.target.value)}
                     />
                  </Col>
                </Row> */}
                <Row>
                  <Col md={12} className="form-group">
                    <input type="text"
                     className="form-control"
                      name="subject" id="subject"
                       placeholder="Subject"
                       onChange={(e) => setSubject(e.target.value)}
                       />
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="form-group">
                    <textarea className="form-control" 
                    name="message" 
                    id="message" 
                    cols="30" 
                    rows="7" 
                    placeholder="Write your message"
                    onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                  </Col>
                </Row>  
                <Row>
                  <Col md={12}>
                    <input type="button" 
                    value="Send Message" 
                    className="btn btn-primary rounded-0 py-2 px-4"
                    onClick={handleSendEmail}
                    />
                 
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </Container>
    <Particle />
  </>
  )
}
