import React, { Component } from 'react';

class Buttons extends Component {
  handleChange(e){
    const name = e.target.value;
    this.changeName(name);
  }
  render(){
    return(
      <div className="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <br/>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
    )
  }
}

export default Buttons;
