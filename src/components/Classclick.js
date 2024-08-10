import React, { Component } from 'react'

  class Classclick extends Component {
    clickHandler(){
        console.log('clicked the button bhanu')
    }
  render(){
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Classclick
