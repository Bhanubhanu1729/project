import React, { Component } from 'react'

 class User extends Component {
    constructor(){
        super();
        this.state = {username : ""};

        this.updateUser = this.updateUser.bind(this)
    }
    updateUser (event){
        this.setState({username:event.target.value})
    }
  render() {
    return (
      <div>
        <form>
        UserName:<input type='text' name='username'
                         value={this.state.username}
                         onChange={this.updateUser}></input>

                         <h1>{this.state.username}</h1>
        </form>
      </div>
    )
  }
}
export default User;