import React, { Component } from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'

export default class Header extends Component {
  render() {
    return (
      <nav class="nav flex-column">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link disabled">Disabled</a>
    </nav>
    )
  }
}
