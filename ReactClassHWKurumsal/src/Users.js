import React, { Component } from 'react'
import { Row, Col, Card, CardImg, CardBody,CardTitle,CardText } from 'reactstrap'



export default class Users extends Component {
  render() {
    let {users} = this.props;
    console.log({users})
    return (
      <div>
        <Row>
            {users.map((user,index)=>(
                <Col xs="6" key={index}>

                    <Card
                    style={{marginLeft: "10px", marginRight: "10px"}} >
                    <CardImg
                        top
                        width="100%"
                        src={URL.createObjectURL(user.image)}
                        alt={"About"}
                        />
                    <CardBody>
                        <CardTitle style={{color: "red"}}>{user.name} {user.surname}</CardTitle>
                        <CardText>{user.about}</CardText>
                    </CardBody>
                    </Card>
                </Col>
            ))}
            
        </Row>
      </div>
    )
  }
}
