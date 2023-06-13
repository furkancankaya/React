import { Container, Col, Row } from "reactstrap";
import Header from "./Header";
import Categories from "./Categories";
import Products from "./Products";

function App() {
  const categories = ["Bilgisayar", "Telefon","Tablet"]
  const products = ["Product1","Product2","Product3"]
  return (
    <Container>
      <Header />
      <Row>
        <Col xs="3">
          <Categories categories={categories}/>
          </Col>

        <Col xs="9">
          <Products products={products} />
          </Col>
        
      </Row>
    </Container>
  );
}

export default App;
