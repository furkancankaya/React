import React, { Component } from "react";
import {Navbar,NavbarBrand,NavbarToggler,
  Collapse,UncontrolledDropdown,DropdownToggle,
  DropdownMenu,DropdownItem,
   Nav, NavItem, NavLink } from 'reactstrap';

export default class Navbarr extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render(){
       
        return(
          <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Product - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu >
                {this.props.cart.map((product) => (
                  <DropdownItem >
                  <span
                    onClick={()=>this.props.removeToCart(product)}
                    className ="badge badge-danger"
                    style={{marginRight:"10px",backgroundColor:"red", padding:"50px"}}
                    >
                      X
                  </span>
                   {product.product.productName}
                   <span
                    className ="badge badge-danger"
                    style={{backgroundColor:"green"}}
                    >
                      {product.quantity}
                  </span>
                </DropdownItem>
                    //<h1> isim {product.product.productName} - adet {product.quantity}</h1>
                ))}
                  
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
          
        )
    }
}