import React, { Component } from 'react';
import ReactDom from 'react-dom';
import RandomCityMap from '../Map/Randomcity';
import 'whatwg-fetch';

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     width                 : '600px',
//     height                : '600px',
//     transform             : 'translate(-50%, -50%)',
//     textAlign             : 'center'
//   }
// };

export default class GameApp extends React.Component {
  constructor () {
    super();
    this.state = {
      name: null
    };
    
    // this.handleGameStart = this.handleGameStart.bind(this);
    this.handleGameEnd = this.handleGameEnd.bind(this);
  }
  
  handleGameEnd () {
    // this.setState({ showModal: false });
    fetch('/api/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name
      })
    });

    window.location = '/';
  }

  render () {
    return (
      <div>
        <h1>Which city is closer?</h1>
        <RandomCityMap />
        <RandomCityMap />
        <button onClick={this.handleGameEnd}>Close Modal</button>
      </div>
    );
  }
}

// const props = {};

// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))
