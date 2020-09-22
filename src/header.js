// import React, {Component} from 'react';
import React from 'react';
import avatar from './assets/avatar.jpg';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={avatar} alt="avatar" />
        <h1>HELLO,</h1>
        <h1>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CY</h1>
        <hr />
      </header>
    );
  }
}
