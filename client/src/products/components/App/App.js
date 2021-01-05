import React, { Component } from 'react';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <MainContainer />
      </div>
    );
  }
}