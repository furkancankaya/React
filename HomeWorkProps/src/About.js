import React from "react";
import { CardBody, CardText, Card } from "reactstrap";

function About({text}){
    return(
        <Card>
            <CardBody>
                <CardText>{text}</CardText>
            </CardBody>
        </Card>
    )
}

export default About;