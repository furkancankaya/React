
import About from "./About";
import Contact from "./Contact";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";
import Users from "./Users";
import Navbarr from "./Navbarr";
//import Navbarr from "./Navbarr"

export default class App extends Component {
  state= {
    users: [],
    user : {//id: 0,
            name: "",
            surname:"",
            about:"",
            image:""},
    image :  null,
}

handleImageChange=(event)=> {
  const selectedFile = event.target.files[0];
  console.log("x: " + selectedFile)
  this.setState({image: selectedFile})
}

  handleSubmit = (event)=>{

    event.preventDefault();
    const evnt =event.target.elements
     
    
    let userList = this.state.users
    
    // this.setState({user:{name:evnt.ad.value,
    //   surname:evnt.soyad.value,
    //   about:evnt.hakkında.value,
    //   image:evnt.resim.value,
    //   }})
    let user = {name:evnt.ad.value,
         surname:evnt.soyad.value,
         about:evnt.hakkında.value,
         image:this.state.image,
         }
      userList.push(user)
      this.setState({users: userList})
    }

    
    
    

  
  render () {
    

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    return (
    <div >
      <Container>
        <Navbarr/>
        <Row>
          <Col xs="5">
          <Contact handleSubmit={this.handleSubmit} handleImageChange={this.handleImageChange}/>
          </Col>
          <Col xs="7">
          <About text={text}/>
          <Users users={this.state.users}/>
          </Col>

        </Row>
      </Container>
      
    </div>
  );
}
}

