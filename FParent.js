import React from 'react'

function FParent(props) {
  return (
    <div>
      <FChild passData={"this is a parent data"}/>
    </div>
  )
}

function FChild(props){
    return(
        <div>
            <h1>{props.passData}</h1>
        </div>
    )
}
export default FParent
