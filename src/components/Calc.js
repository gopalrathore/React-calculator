import React, { Component } from 'react';
import Result from './Result';
import Buttons from './Buttons';

class Calc extends Component {
  constructor(){
    super();
    this.state = {
      result: 579,
      first: 123,
      second: 456,
      operator: "+"
    }
  }
changeResult(which, value){
  this.setState({
    which: value
  });
}
  render(){
    console.log(this.state);
    return(
      <div className="calc">
        <Result all={this.state}/>
        <Buttons all={this.state} changeResult={this.changeResult.bind(this)}/>
      </div>
    )
  }
}

export default Calc;
