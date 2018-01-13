import React, {Component} from "react";
import Clock from "./Clock";
import "./App.css";
import {Button, FormControl, Form,ControlLabel, FormGroup} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "february 27, 2018",
      newDeadline: ""
    }
  }
  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }
  render() {
    return (<div className="App">
      <div className="App-title">
        <ControlLabel>Menghitung dari </ControlLabel>
          {this.state.deadline}
      </div>
      <div>
        <Clock deadline={this.state.deadline}/>
      </div>
      <div>
        <Form inline>
          <FormGroup controlId="formInlineName">
        <FormControl placeholder="ex : August 27, 2018" onChange={event => this.setState({newDeadline: event.target.value})}/>
        </FormGroup>{' '}
        </Form>
      <Button color="danger" onClick={() => this.changeDeadline()}>Submit</Button>
      </div>
    </div>)
  }
}

export default App;
