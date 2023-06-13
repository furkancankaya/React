import React, { Component } from 'react'
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap'

export default class Header extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <Nav className='mr-auto' navbar>
            <NavItem>
                <NavLink href="/components/">Categories</NavLink>
              </NavItem>
            <NavItem>
                <NavLink href="/components/">Products</NavLink>
              </NavItem>
            <NavItem>
                <NavLink href="/components/">Contact</NavLink>
              </NavItem>
        </Nav>
    </Navbar>
    )
  }
}
