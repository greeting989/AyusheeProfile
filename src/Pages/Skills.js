import React from 'react';
/*import SkillList from './SkillList';*/
import Card from "react-bootstrap/Card";
// rows and columns
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ht from './html.png';
import cs from './css.png';
import j from './J.png';
import Boot from './boot.png';
import rect from './r.png';
import c from './c.png';
import cpp from './c++.png';
import java from './java.png';
import figma from './figma.png';
import './Skill.css';


function Skills () {
	
  return(
      <div className="homediv skilldiv">	
         <Container>
          <Row style={{padding : "2rem"}}>
            <Col>
              <Card style={{ width: "20rem" , height: "20rem"}} >
                <Card.Body>
                  <Card.Title></Card.Title>
                  
                  <Card.Text>
                  
                   <img src={ht} style={{ width: "15rem" , height: "15rem" }}/>
                   
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "20rem" , height: "20rem"}}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  
                  <Card.Text>
                  
                   <img src={cs} style={{ width: "15rem" , height: "15rem" }}/>
                   
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "20rem" , height: "20rem" }}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  
                  <Card.Text>
                  
                   <img src={j} style={{ width: "20rem" , height : "15rem"}}/>
                   
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="firstdiv">
            <Col>
              <Card style={{ width: "20rem" , height: "20rem"}}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  
                  <Card.Text>
                  
                   <img src={Boot} style={{ width: "15rem" , height: "15rem" }}/>
                   
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "20rem" , height: "20rem"}}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  
                  <Card.Text>
                  
                   <img src={rect} style={{ width: "15rem" , height: "15rem" }}/>
                   
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "20rem" , height: "20rem" }}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  
                  <Card.Text>
                  
                   <img src={c} style={{ width: "15rem" , height: "15rem" }}/>
                   
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="firstdiv">
            <Col>
              <Card style={{ width: "20rem", height: "20rem" }}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  
                  <Card.Text>
                  
                   <img src={cpp} style={{ width: "15rem" , height: "15rem" }}/>
                   
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "20rem" , height: "20rem" }}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  
                  <Card.Text>
                  
                   <img src={java} style={{ width: "15rem" , height: "15rem" }}/>
                   
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "20rem", height: "20rem" }}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  
                  <Card.Text>
                  
                   <img src={figma} style={{ width: "15rem" , height: "15rem" }}/>
                   
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
        </Container>
                </div>
        );
}

export default Skills;