import React, { Component } from 'react'

 class Product extends Component {
    constructor(){
        super();
        this.state = {productName : " "};
        this.updateproduct = this.updateproduct.bind(this)
    }
    updateproduct(){
        this.setState({productName :"Bhanu Teja"},function(){
            console.log(this.state.productName);
        });
    }
  render() {
    return (
      <div>
        <h1>Ur Product Name :{this.state.productName}</h1>
        <button onClick={this.updateproduct}>Update</button>
      </div>
    )
  }
}
export default Product;