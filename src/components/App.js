import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/index.css";
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import  MemeItem  from './MemeItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
    };
  }

  render() {
    return (
      <div>
        <h2><u>Welcome to the meme generator</u></h2>
        <h4><i>Write Some Text</i></h4>
        <Form inline>
          <Form.Group>
            <Form.Label>Top</Form.Label>
            {' '}
            <Form.Control
              type="text" onChange={(event)=>this.setState({text0: event.target.value})}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Bottom</Form.Label>
            <Form.Control
            type="text" onChange={(event)=>this.setState({text1: event.target.value})}
            ></Form.Control>
          </Form.Group>
        </Form>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return <MemeItem key={index} meme={meme} />
        })}
        <div className="meme-button"
          onClick={() =>
            this.setState({ memeLimit: this.state.memeLimit + 10 })
          }
        >
          Load 10 more memes..
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
