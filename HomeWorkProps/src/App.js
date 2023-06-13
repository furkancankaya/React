import React from "react";
import  Navbar  from './Navbar';
import  Content  from './Content';
import  About  from './About';
import  Footer  from './Footer';
import  Login  from './Login';

import  Progres  from './Progres';
import { Container , Row, Col} from "reactstrap";


function App() {

  const links =[
    {title: "Home", url:"/"},
    {title: "Content", url:"/content"},
    {title: "Login", url:"/login"}
  ];

  const urunler = [
    "Lorem 1",
    "Lorem 2",
    "Lorem 3",
    "Lorem 4",
    "Lorem 5",
  ];

  const login = 
    {email:"furkancankaya@gmail.com", password:"1234567"}

    
  

  const progres = ["25","30","60"]

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, arcu quis tempor aliquam, magna diam aliquet nunc, sed";
  
  const comments = ["Lorem ipsum dolor sit amet",
                    "consectetur adipiscing elit",
                    "Nullam euismod"]
  return (
    <div >
      <Navbar links={links} />

      <Container>
          <Row>
            <Col xs="9">
              <Row>
                <Col xs="3">
                  <Row>
                    <Content urunler={urunler}/>
                  </Row>
                </Col>
                <Col xs="9">
                  <About text={text} />
                  <br/>
                <Progres progres={progres} comments={comments}/>
                </Col>
              </Row>
                
              
            </Col>
            <Col xs="3">
              <Login login={login}/>
            </Col>
          
          </Row>
          
      </Container>
      
      <Footer />
    </div>
  );
}

export default App;
