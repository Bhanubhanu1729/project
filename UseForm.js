import React, { Component } from 'react'
import Counter from './Counter';

export class UseForm extends Component {
    constructor (){
        super();
        this.state ={username:"",city:"",state:"",country:""};

        this.userUpdate = this.userUpdate.bind(this);
        this.userSubmit = this.userSubmit.bind(this);
    }
    userUpdate(event){
        this.setState({[event.target.name]:event.target.value});
    }

    userSubmit(event){
        event.preventDefault();
        alert("successfuly sent form")

    }
  render() {
    return (
      <div>
        <form onSubmit={this.userSubmit}>
            UserName:<input type='text' name='username' value={this.state.username} onChange={this.userUpdate}></input><br/>
            City:<input type='text' name='city' value={this.state.city} onChange={this.userUpdate}></input><br/>
            State:<input type='text' name='state' value={this.state.state} onChange={this.userUpdate}></input><br/>
            Country:<input type='text' name='counter' value={this.state.country} onChange={this.userUpdate}></input><br/>
        
            <button value="submit">Submit</button>
        
        </form>
      </div>
    )
  }
}

export default UseForm

