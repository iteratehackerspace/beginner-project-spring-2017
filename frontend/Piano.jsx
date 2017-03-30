import React from 'react';
import { render } from 'react-dom';

import keydown, { Keys, keydownScoped } from 'react-keydown';

import PianoRock from './lib/fire-scripts';


const KEYS = ['2','3','5','6','7','9','0',
                'q','w','e','r','t','y','u','i','o','p'];

/***********************BLACK**************************/
class BlackKey extends React.Component {
  constructor(props) {
    super(props);
    this.k_d_handler = this.k_d_handler.bind(this);
    this.state = {
      b_g_color:'black'
    };
  }

   @keydownScoped( KEYS )
  k_d_handler(e) {
   if(this.props.idc == e.key){
     switch (e.key) {
       case "2": tones.play('c#',5);pianoRock.pushNote(e);break;
       case "3": tones.play('d#',5);pianoRock.pushNote(e);break;
       case "5": tones.play('f#',5);pianoRock.pushNote(e);break;
       case "6": tones.play('g#',5);pianoRock.pushNote(e);break;
       case "7": tones.play('a#',5);pianoRock.pushNote(e);break;

       case "9": tones.play('c#',6);pianoRock.pushNote(e);break;
       case "0": tones.play('d#',6);pianoRock.pushNote(e);break;

       default:
     }
     this.setState({
       b_g_color:'orange'
     });
     setTimeout(() => {
         this.setState({
            b_g_color:'black'
         });
       }, 200);
   }
  }

  render(){
    let marginLeft = this.props.marginLeft;

    const div_style = {
      marginLeft: marginLeft,
      marginRight:'10px',
      width:'30px',
      height:'50%',
      backgroundColor:this.state.b_g_color,
      position:'absolute',
    };
    return(
      <div style={div_style}  />
    );
  };
}

/***********************WHITE**************************/
class WhiteKey extends React.Component {
  constructor() {
    super();
    this.k_d_handler = this.k_d_handler.bind(this);
    this.state = {
       b_g_color:'white'
    };
  }

  @keydownScoped( KEYS )
   k_d_handler(e) {
    if(this.props.idc == e.key){
      switch (e.key) {
        case "q": tones.play('c',5);pianoRock.pushNote(e);break;
        case "w": tones.play('d',5);pianoRock.pushNote(e);break;
        case "e": tones.play('e',5);pianoRock.pushNote(e);break;
        case "r": tones.play('f',5);pianoRock.pushNote(e);break;
        case "t": tones.play('g',5);pianoRock.pushNote(e);break;
        case "y": tones.play('a',5);pianoRock.pushNote(e);break;
        case "u": tones.play('b',5);pianoRock.pushNote(e);break;

        case "i": tones.play('c',6);pianoRock.pushNote(e);break;
        case "o": tones.play('d',6);pianoRock.pushNote(e);break;
        case "p": tones.play('e',6);pianoRock.pushNote(e);break;


        default:
      }

      this.setState({
       b_g_color:'orange'
     });
     setTimeout(() => {
         this.setState({
            b_g_color:'white'
         });
       }, 200);
    }
  }

  render(){

    const div_style = {
      width:'45px',
      height:'100%',
      backgroundColor:this.state.b_g_color,
      border:'2px solid black',
      float:'left',
      position:'relateve'
    };
    return(
      <div style={div_style} />
    );
  };
}


/***********************PIANO**************************/
@keydown( KEYS )
export default class Piano extends React.Component {

  render() {

    const bottom_style = {
      position: 'absolute',
       left: '40%',
       bottom:'50px',
    };
    const nots_style = {
      justifyContent:'center',
      position:'relative',
      left:'-30%',
      height:'180px',
    };

    return(
    <div>
      <div style = {bottom_style}>
        <div style={nots_style}>

          <WhiteKey idc='q' {...this.props}/>
          <BlackKey marginLeft = '30px' idc='2' {...this.props}/>
          <WhiteKey idc='w' {...this.props}/>
          <BlackKey marginLeft = '75px' idc='3' {...this.props}/>
          <WhiteKey idc='e' {...this.props}/>
          <WhiteKey idc='r' {...this.props}/>
          <BlackKey marginLeft = '165px' idc='5' {...this.props}/>
          <WhiteKey idc='t' {...this.props}/>
          <BlackKey marginLeft = '210px' idc='6' {...this.props}/>
          <WhiteKey idc='y' {...this.props}/>
          <BlackKey marginLeft = '255px' idc='7' {...this.props}/>
          <WhiteKey idc='u' {...this.props}/>

            <WhiteKey idc='i' {...this.props}/>
            <BlackKey marginLeft = '345px' idc='9' {...this.props}/>
            <WhiteKey idc='o' {...this.props}/>
            <BlackKey marginLeft = '390px' idc='0' {...this.props}/>
            <WhiteKey idc='p' {...this.props}/>

        </div>
      </div>
    </div>
    );
  };
}
