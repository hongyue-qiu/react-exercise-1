import React, { Component } from 'react';
import './App.scss';
import Header from './header.js';
import Nav from './nav.js';
import SessionList from './sessionList.js';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Nav />
        <SessionList />
      </main>
    );
  }
}

export default App;
