
import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Contact extends Component {

    state= {
        user : {//id: 0,
                name: "",
                surname:"",
                about:"",
                image:""}
    }
    
    

   // this.props.getUserinContact(this.state.user)
    // buttonClick = () => {
    //   this.handleSubmit();
      
    // };
    
    
  

    // handleSubmit = (event)=>{
    //   console.log("fff")
      
    //   event.preventDefault();
    //   const evnt =event.target.elements
       
    //    const user = {
    //       name:evnt.ad.value,
    //        surname:evnt.soyad.value,
    //        about:evnt.hakkında.value,
    //        image:evnt.resim.value};
    //       this.props.getUserinContact(user)
    //       console.log("aaa:"+ user.name)
    //   }

    

    render() {  
      
       

        // this.setState({user:{name:evnt.ad.value,
        //     surname:evnt.soyad.value,
        //     about:evnt.hakkında.value,
        //     image:evnt.resim.value,
            //id: this.props.usersListLength
               


    

    return (
      
      
      <Form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Label for="ad" sm={2}>Ad</Label>
          <Col sm={10}>
            <Input type="text" name="ad" id="ad" placeholder="Adınız" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="soyad" sm={2}>Soyad</Label>
          <Col sm={10}>
            <Input type="text" name="soyad" id="soyad" placeholder="Soyadınız" />
          </Col>
        </FormGroup>
        
        
        <FormGroup row>
          <Label for="hakkında" sm={2}>Hakkında</Label>
          <Col sm={10}>
            <Input type="textarea" name="hakkında" id="hakkında" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="resim" sm={2}>Resim</Label>
          <Col sm={10}>
            <Input type="file" name="resim" id="resim" onChange={this.props.handleImageChange} />
            <FormText color="muted">
              Vesikalık fotoğrafınızı ekleyiniz.
            </FormText>
          </Col>
        </FormGroup>
        
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Kayıt</Button>
            
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
