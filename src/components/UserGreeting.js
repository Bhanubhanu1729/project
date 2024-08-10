import React, { Component } from 'react'
 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    // short circuit operator:
    return this.state.isLoggedIn  && <div>Welcome to this world</div>

    // ternary condition:
    // return this.state.isLoggedIn ?(
    //     <div>Welcome to this world</div>):(<div>welcome </div>)
       
    // Element Variables:
    // let Message
    // if(this.state.isLoggedIn){
    //     Message =  <div>Welcome to this world</div>
    // } else{
    //     Message = <div>welcome </div>
    // }
    // return<div>{ Message }</div>

    // if/else:
    // if(this.state.isLoggedIn){
    //     return <div>Welcome to this world</div>
    // } else{
    //     return <div>welcome </div>
    // }

    // normal:
    // return (
    //   <div>
    //     <div>Welcome to this world</div>
    //     <div>welcome </div>
    //   </div>
    // )
  }
}

export default UserGreeting
