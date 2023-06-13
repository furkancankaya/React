import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import Products from "./Products";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>

          <Header />
          <Row>
            <Col sm="3"><Categories /> </Col>

            <Col sm="9"><Products /> </Col>
        
        
      
          </Row>
      </Container>
      
      
    </div>
  );
}

export default App;
