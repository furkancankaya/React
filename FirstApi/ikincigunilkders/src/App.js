import React from "react";
import {Component} from "react";
import Categories from "./Categories";
import Products from "./Products";

import {Row, Container, Col} from "reactstrap";
import Navbarr from "./Navbarr";

export default class App extends Component {

  state = {
    products :[],
    currentCategory: "",
    cart: []
  };

  

  changeCategory = (category) => {
    this.setState({currentCategory : category.categoryName});
    this.getProducts(category.id);
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity +=1;
      

    } else{
      newCart.push({product: product, quantity: 1})
      
    }
    this.setState({cart: newCart});
    
  }

  removeToCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id)
    this.setState({cart: newCart})
  }

  counter = (x) => {

    this.setState ({count: () => x + 1 })
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({products: data}));
  }

  componentDidMount() {
    this.getProducts();
  }

  render () {
    return (
      <Container>
          <Navbarr
            cart = {this.state.cart}
            removeToCart = {this.removeToCart}
          />
          <Row>
            <Col xs="3">
              <Categories
              changeCategory={this.changeCategory}
              currentCategory={this.state.currentCategory}
              />
            </Col>
            <Col xs="9">
              <Products
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                addToCart = {this.addToCart}
                

              />
            </Col>
          </Row>
        </Container>
    );
  }
}