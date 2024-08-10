import React from 'react'; 

// function Greet(){
//     return <h1>Function Components</h1>
// }

const Greet=(props)=>{
    const {name,city} = props
    return(
        <div>
            <h3>
                Hello {name} {city}
            </h3>
        </div>
    )
}
export default Greet