import React from 'react';
import "./Work.css";
import worklog from './Work2-1.png';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Work () {

    return(
        <Container fluid>
            <Row>
                <Col>
                 	<div>
                    <div className="workdiv homediv">
                         <img src={worklog} alt="work" className="workImg"/>  
                    </div>
                    <div className="worktext">
                         <h2 className="spantxt n1">Company : Wipro Technologies</h2>
                         <h2 className="spantxt n1">Experience : 1.5 Years</h2>
                         <h2 className="spantxt n1">Role: Project Engineer</h2>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
        );
}

export default Work;