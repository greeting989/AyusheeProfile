import React from 'react';
import './Footer.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function Footer () {
    return(
        <Container fluid>
    	<div>
            <Row>
                <Col>
                <div className="footerdiv">
                    <p className="madeby">Contact</p> 
                     <div className="contactus">
                        <a href= 'https://www.linkedin.com/in/ayushee-shrivastava-3b9b541a2/'><i class="fab fa-linkedin-in"></i></a>
                         <a href="mailto:aayusheeshrivastava@gmail.com"><i class="far fa-envelope"></i></a>
                    </div> 
                </div>
                </Col>
            </Row>
            
            
          </div>
        </Container>
        );
        
}

export default Footer;