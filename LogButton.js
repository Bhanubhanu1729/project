import React , {useRef} from 'react'

function LogButton() {

    const count = useRef(0);

    const CheckRef = () =>{
        count.current++;

        console.log('count value'+count.current)
    }
  

  return (
    <div>
      <button onClick={CheckRef}>CheckRef</button>
      <h1>{count.current}</h1>
    </div>
  )
}

export default LogButton
