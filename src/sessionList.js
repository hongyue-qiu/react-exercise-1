import React from 'react';
import EachContent from './eachContent.js';
import EachContent2 from './eachContent2.js';
import EachContent3 from './eachContent3.js';
import EachContent4 from './eachContent4.js';

export default class SessionList extends React.Component {
  render() {
    return (
      <session>
        <h3>EDUCATION</h3>
        <EachContent />
        <EachContent2 />
        <EachContent3 />
        <EachContent4 />
      </session>
    );
  }
}
