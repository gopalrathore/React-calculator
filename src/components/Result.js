import React, { Component } from 'react';

class Result extends Component {
  //console.log(this.props);
  render(){
    console.log(this.props);
    return(
      <h2>{this.props.all.first} {this.props.all.operator} {this.props.all.second} = {this.props.all.result}</h2>
    )
  }
}

export default Result;
