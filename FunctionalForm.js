import React ,{useState}from 'react'

function FunctionalForm() {
    const[inputField , setInputField]=useState({name:"",email:"",city:"",state:"",country:""});
     const updateForm=(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setInputField({[name]:value});
     }

     const submitForm=(e)=>{
        e.preventDefault ();
        alert("success");
     }

  return (
    <div>
      <form onSubmit={submitForm}>
        Name : <input type='text'name='inputField.name'value={inputField.name} onChange={updateForm}/><br/><br/>
        Email : <input type='mail'name='inputField.email'value={inputField.email} onChange={updateForm}/><br/><br/>
        State : <input type='text'name='inputField.state'value={inputField.state} onChange={updateForm}/><br/><br/>
        city : <input type='text'name='inputField.city'value={inputField.city} onChange={updateForm}/><br/><br/>
        country : <input type='text'name='inputField.country'value={inputField.country} onChange={updateForm}/><br/><br/>

<button value="submit">Submit</button>
      </form>
    </div>
  )
}

export default FunctionalForm
