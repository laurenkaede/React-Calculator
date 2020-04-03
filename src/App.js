import React from "react";
import "./App.css";

class App extends React.Component {
 
  state = {
    numLeft: [],
    numLeftActive: true,
    operator: "",
    numRight: [],
    numRightActive: false,
    result: 0
  }

setNumber = (n) => {
  if (this.state.numLeftActive) {
    let numUpdatedLeft = [...this.state.numLeft, n].join("");
    let numUpdatedLeftInt = parseInt(numUpdatedLeft);
    this.setState({
      numLeft: [numUpdatedLeftInt],
    }); 
  } else if (this.state.numRightActive) {
    let numUpdatedRight = [...this.state.numRight, n ].join("");
    let numUpdatedRightInt = parseInt(numUpdatedRight);
    this.setState({
      numRight: [numUpdatedRightInt],
    });
  }
}

setOperator = (o) => {
  this.setState({
    numLeftActive: false,
    operator: o,
    numRightActive: true,
  });
}

clear = () => {
  this.setState({
    numLeft: [],
    numLeftActive: true,
    operator: "",
    numRight: [],
    numRightActive: false,
    result: 0
  });
}

setResult = () => {
  if (this.state.numLeft && this.state.numRight) {
    let finalResult = 0;
    if (this.state.operator === "+") {
      finalResult = + this.state.numLeft + + this.state.numRight;
    } else if (this.state.operator === "-") {
      finalResult = this.state.numLeft - this.state.numRight;
    } else if (this.state.operator === "x") {
      finalResult = this.state.numLeft * this.state.numRight;
    } else if (this.state.operator === "/") {
      finalResult = this.state.numLeft / this.state.numRight;
    } else {
      finalResult = 0;
    }
    this.setState({
      result: finalResult
    });
  }
}

  render() {

    return (
     <div className="main">

      <div>
        <h1>Lauren's Calculator</h1><br/>
        <h2 className ="display">{this.state.result}</h2> 
      </div>

      <div className="container">
     
        <div className="numbers" onClick={ () => this.setNumber(1) }>1</div>
        <div className="numbers" onClick={ () => this.setNumber(2) }>2</div>
        <div className="numbers" onClick={ () => this.setNumber(3) }>3</div>
        <div className="operators1" onClick={ () => this.setOperator("+")}>+</div>
        
        <div className="numbers" onClick={ () => this.setNumber(4) }>4</div>
        <div className="numbers" onClick={ () => this.setNumber(5) }>5</div>
        <div className="numbers" onClick={ () => this.setNumber(6) }>6</div>
        <div className="operators1" onClick={ () => this.setOperator("-")}>-</div>
      
        <div className="numbers" onClick={ () => this.setNumber(7) }>7</div>
        <div className="numbers" onClick={ () => this.setNumber(8) }>8</div>
        <div className="numbers" onClick={ () => this.setNumber(9) }>9</div>
        <div className="operators" onClick={ () => this.setOperator("x")}>x</div>
        
        <div className="cleared" onClick={ () => this.clear("clear")}>clear</div>  
        <div className="numbers" onClick={ () => this.setNumber(0) }>0</div>
        <div className="equals" onClick={this.setResult}>=</div>
        <div className="operators" onClick={ () => this.setOperator("/")}>/</div> 
      </div>    

    </div> 
    );
  }
}
export default App;
