import React, { Component } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../redux/actions/counterActions'
import { connect } from 'react-redux'

class CounterDecrease extends Component {

  handleSubmit = (event) =>{
    event.preventDefault();
    const evnt =Number(event.target.elements.number.value);
    console.log("eventt"+event)
    this.props.dispatch(decreaseCounter(evnt));

  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label for="number">
          </Label>
          <Col sm={1}>
          <Input
              id="number"
              name="number"
              type="number"
          />
          </Col>
          {/* </FormGroup>
          <FormGroup row> */}
            <Col>
            <Button sm={1}
              color="danger"

              >
                  Decrease
              </Button>
            </Col>
          </FormGroup>
        
        
        </Form>
      </div>
      
    )
  }
}



function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(decreaseCounter, dispatch)}
  }
  
  export default connect(mapDispatchToProps)(CounterDecrease);