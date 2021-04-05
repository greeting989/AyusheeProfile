import React from 'react';
import './Home.css';
import avatar1 from './avatar-removebg-preview (1).png';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Home () {
        const url = "https://images.pexels.com/photos/4439454/pexels-photo-4439454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        return(
        <Container fluid>
           
        <Row>
            <Col > 
                <div  className="homediv">
               
                    <div className="backgroundtext">
                                <h1 className="backgroundsubtext">I AM <span className="spantxt name1">AYUSHEE SHRIVASTAVA </span>!</h1>
                                <img src={avatar1} alt="avatar" className="avatar1 pos"/>
                                
                    </div>
                     <div>
                                    <p className="homediv1">Developer | <span className="name2">Optimistic</span>| Yearning to Learn</p>
                 </div>
                </div>
            <Col>  
            </Col>
        </Col>
            
        </Row>
              
        </Container>
        
            
            
        );
}

export default Home;