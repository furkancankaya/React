import React, { Component } from 'react'

//import { CardImg, Card, CardBody,CardTitle,Button } from 'reactstrap'

export default class About extends Component {
 

  render() 
  
  {
    return (
        <>
      <div >
        <img style={{width: "100%", height: 200}} src='images/about.jpg' alt="About"></img>
        <p>{this.props.text}</p>
      </div>
      
      </>
    )
  }
}
