import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import Util from "./Util1";
import UseState from "./useState";

export default class App extends React.Component {
  // state = {
  //   total: null,
  //   next: null,
  //   operation: null,
  // };

  // handleClick = buttonName => {
  //   this.setState(calculate(this.state, buttonName));
  // };
constructor(props){
  super(props)
  this.state ={
count : 0
  }
}


  render() {
    return ( 
      <div className="component-app">
        {/* <h1 className="util">App class</h1>
        <Util prname = "Mohamad" ></Util> */}
        {/* <Util prname = "Sneha"></Util> */}
        <UseState></UseState>
        {/* <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} /> */}
      </div>
    );
  }
}
