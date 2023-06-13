import React, { Component } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { increaseCounter } from '../redux/actions/counterActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class CounterIncrease extends Component {

  handleSubmit = (event) =>{
    event.preventDefault();
    const evnt =Number(event.target.elements.number.value);
    console.log("eventt"+event)
    this.props.dispatch(increaseCounter(evnt));

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
              color="success"

              >
                  Increase
              </Button>
            </Col>
          </FormGroup>
        
        
        </Form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseCounter, dispatch)}
  }

  export default connect(mapDispatchToProps)(CounterIncrease);