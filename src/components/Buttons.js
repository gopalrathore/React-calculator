import React, { Component } from 'react';
var flag = true;
var first="";
var second="";
class Buttons extends Component {
  handleNumber(e){
    var button = e.target.innerHTML;
    console.log(flag);
    if(flag){
      first += button;
      this.props.setFirst(first);
    }else{
      second += button;
      this.props.setSecond(second);
    }
    // this.props.changeResult();
  }

  handleOperator (e){
    var button = e.target.innerHTML;
    if(button==="="){
      flag = true;
      this.calculate();
    }else{
      flag = false;
      this.props.setOperator(button);
    }
    
  }

  calculate(){
    switch (this.props.operator) {
      case "+":
      this.props.setResult(first+second);
      break;
      case "-":
      this.props.setResult(first-second);
      break;
      case "*":
      this.props.setResult(first*second);
      break;
      case "/":
      this.props.setResult(first/second);     
      break;
    }
  }

  render(){
    return(
      <div className="buttons">
      <button onClick={this.handleNumber.bind(this)}>1</button>
      <button onClick={this.handleNumber.bind(this)}>2</button>
      <button onClick={this.handleNumber.bind(this)}>3</button>
      <button onClick={this.handleNumber.bind(this)}>4</button>
      <button onClick={this.handleNumber.bind(this)}>5</button>
      <button onClick={this.handleNumber.bind(this)}>6</button>
      <button onClick={this.handleNumber.bind(this)}>7</button>
      <button onClick={this.handleNumber.bind(this)}>8</button>
      <button onClick={this.handleNumber.bind(this)}>9</button>
      <button onClick={this.handleNumber.bind(this)}>0</button>
      <br/>
      <button onClick={this.handleOperator.bind(this)}>+</button>
      <button onClick={this.handleOperator.bind(this)}>-</button>
      <button onClick={this.handleOperator.bind(this)}>*</button>
      <button onClick={this.handleOperator.bind(this)}>/</button>
      <button onClick={this.handleOperator.bind(this)}>=</button>
      </div>
      )
    }
  }

  export default Buttons;
