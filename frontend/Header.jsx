import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Header extends Component{
  constructor(){
    super()
  }

  componentDidMount() {

  }

  render(){

    const headerStyle = {
      margin:'0px 0px 0px 0px',
      height:'100px',
      backgroundColor:'yellow',
      float: 'top',
      textAlign:'left',
      fontSize:'76px',
      verticalAlign: 'middle',
    };
    const buttonStyle = {
      margin:'25px 25px 0px 0px',
      height:'50%',
      width:'15%',
      backgroundColor:'blue',
      float: 'right',
      textAlign:'center',
      verticalAlign: 'middle',
      lineHeight: '50px',
      fontSize:'34px'
    };
    return(
      //TODO real button element should go instead of styled div
      //TODO log-in and log-out on same button
      <div>
        <div style = {headerStyle}>Hello!
          <div style = {buttonStyle} id="log-in" >Login</div>
          <div style = {buttonStyle} id="log-out" >Logout</div>
        </div>
      </div>
    );
  }
}
