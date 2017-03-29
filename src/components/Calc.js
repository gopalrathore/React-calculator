import React, { Component } from 'react';
import Result from './Result';
import Buttons from './Buttons';

class Calc extends Component {
  constructor(){
    super();
    this.state = {
      result: null,
      first: null,
      second: null,
      operator: null
    }
  }
  
  setFirst(first){
    this.setState({
      first: first
    });
  }

  setSecond(second){
    this.setState({
      second: second
    });
  }

  setResult(result){
    this.setState({
      result: result
    });
  }

  setOperator(operator){
    this.setState({
      operator: operator
    });
  }
  render(){
    console.log(this.state);
    return(
      <div id="calculator">
      <Result all={this.state}/>
      <Buttons operator={this.state.operator} setResult={this.setResult.bind(this)} setOperator={this.setOperator.bind(this)} setSecond={this.setSecond.bind(this)} setFirst={this.setFirst.bind(this)}/>
      </div>
      )
    }
  }

  export default Calc;
