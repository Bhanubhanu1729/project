import React, { Component } from 'react'

 class BankAccount extends Component {
    constructor(){
        super();
        this.state={
                     Name : "Bhanu",
                     AccountNumber: 12344567,
                     location : "alwal",
        
        };
        this.handelChange = this.handelChange.bind(this);
    }
    handelChange(){
        this.setState({Name:"Teja"});
    }
  render() {
    return (
      <div>
        <h1>{this.state.AccountNumber }</h1>
        <h1>{this.state.location }</h1>
        <h1>{this.state.Name }</h1>
        <button onClick={this.handelChange}>On Change</button>
      </div>
    )
  }
}

export default BankAccount
