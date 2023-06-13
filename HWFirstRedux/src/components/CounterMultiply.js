import React, { Component } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { multiplyCounter } from '../redux/actions/counterActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class CounterMultiply extends Component {

  handleSubmit = (event) =>{
    event.preventDefault();
    const evnt =event.target.elements.number.value;
    console.log("eventt"+event)
    this.props.dispatch(multiplyCounter(evnt));

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
          
            <Col>
            <Button sm={1}
              color="primary"

              >
                  Multiply
              </Button>
            </Col>
          </FormGroup>
        
        
        </Form>
      </div>
    )
  }
}
 


function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(multiplyCounter, dispatch)}
  }
  
  export default connect(mapDispatchToProps)(CounterMultiply);