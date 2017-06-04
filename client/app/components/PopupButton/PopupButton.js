import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ReactModal from 'react-modal';
import RandomCityMap from '../Map/Randomcity';
import 'whatwg-fetch';

export default class ExampleApp extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      name: null
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    let name = prompt("Please enter your name", "Harry Potter");
    console.log(name);
    this.setState({ 
      showModal: true,
      name: name
    });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
    fetch('/api/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name
      })
    });
  }
  
  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Start Game</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
        		<RandomCityMap />
            <RandomCityMap />
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

// const props = {};

// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))