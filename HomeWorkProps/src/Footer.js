import React from "react";
import { Container, Row, Col } from "reactstrap";

function Footer(){
    return(
        <footer className="bg-dark text-white">
            <Container>
                <Row>
                    <Col>
                    <p className="float-right">2023 Company Website by FC</p>
                    </Col>
                </Row>
            </Container>
        </footer> 
    )
}

export default Footer;