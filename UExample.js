import React ,{useRef} from 'react'

function UExample() {

    const count = useRef(2);

    const checkvalue=()=>{
        count.current++;
        console.log(count.current)
    }
  return (
    <div>
      <button onClick={checkvalue}>Check Value</button>
    </div>
  )
}

export default UExample
