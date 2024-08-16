import React ,{useState,useMemo}from 'react'

function MemoExamples() {
    console.log("main component");

    const[number ,setNumber] = useState(0);
    const[a ,setA] = useState(0);
    const[b ,setB] = useState(0);
    const[count , setCount]=useState(0);

    const increaseCount=()=>{
        setCount(count+1);
    };

    const updateNumber = (e)=>{
        setNumber(e.target.value);
    };
    const updateA = (e)=>{
        setA(e.target.value);
    };
    const updateB = (e)=>{
        setB(e.target.value);
    };

    const mulv = useMemo(()=>{
        mul(b);
    } ,[b]);

    const squarev = useMemo(()=>{
        square(number);
    } ,[number]);

    const addv = useMemo(()=>{
        add(a);
    } ,[a]);

  return (
    <div>
       number for squuare <input type='number' value={number} onChange={updateNumber}/><br/><br/>
       number for add <input type='number' value={a} onChange={updateA}/><br/><br/>
       number for mul <input type='number' value={b} onChange={updateB}/><br/><br/>
       <button onClick={increaseCount}>increaseCount</button>
       <h1>count:{count}</h1>
       <h1>square value:{squarev}</h1>
       <h1>add value:{addv}</h1>
       <h1> Mull value:{mulv}</h1>
    </div>

  )
}

function square(number){
    console.log('square function')
    return Math.pow(number,2);
}
function add(a){
    console.log('add function')
    return a + 10;
}
function mul(b){
    console.log('mul function')
    return b * 2;
}

export default MemoExamples
