import React, { Component } from 'react';

class Result extends Component {
  render(){
  	return(
  		<div className="top">  		
  		<div className="screen">{this.props.all.first} {this.props.all.operator} {this.props.all.second} {this.props.all.result}</div>
  		</div>
  		)
  }
}

export default Result;
