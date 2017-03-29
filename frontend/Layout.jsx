import React, {Component} from 'react';
import {render} from 'react-dom';

import Header from './Header'
import Piano from './Piano'
import Tune from './Tune'
import MusicBox from './MusicBox'

export default class Layout extends Component{
  constructor(){
    super()
  }
  componentDidMount() {
  }

  render(){
    return(
      <div>
        <Header />
        <Tune />
        <Piano />
        <MusicBox />
      </div>
    );
  }
}
