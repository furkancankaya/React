import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardGroup, Button } from 'reactstrap';
import { Col } from 'reactstrap';
export default class Producst extends Component {

    state = {
        products :[
            "Backpack", "Ball", "Rope",
        ],
        
    };


    render() {
        const {products} = this.props;
        return (
            <div>
                <h2>{this.props.currentCategory}</h2>
                <CardGroup>
                    {products.map((product) => (
                        <Col xs="3">
                            <Card
                            style={{marginLeft: "10px", marginRight: "10px"}} key={product.id}>
                                <CardImg
                                    top
                                    width="100%"
                                    src={product.image}
                                    alt={product.productName}
                                    />
                                <CardBody>
                                    <CardTitle>{product.productName}</CardTitle>
                                    <CardText>{product.desc}</CardText>
                                    <Button onClick={() => this.props.addToCart(product)}>Ekle</Button>
                                    <Button onClick={() => this.props.removeToCart(product)}>cikar</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </CardGroup>
            </div>   
        );
    }
}