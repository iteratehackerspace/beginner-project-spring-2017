import React from 'react';
import { render } from 'react-dom';

export default class Drum extends React.Component {
  render() {
    const centered = {
      position:'absolute',
      left:'45%',
      bottom:'50%'
    };
    return(
      <div style={centered}>Drums should go here</div>
    );
  }
}
