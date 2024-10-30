import { useMemo, useState } from "react"

const UseMemo = () => {
    const[add,setAdd]=useState(0)
    const[sub,setSub]=useState(100)

    // for optimizing the performance otherwise it will call every time when we click on the button
    const multiplication=useMemo(function multiply(){
        console.log("multiplication")
        return add*10

    },[add])
  return (
    <div>
    <h1>Addition : {add}</h1>
    <button onClick={()=>setAdd(add+1)}>Addition</button>
    <h1>Multiplication : {multiplication}</h1>
    <h1>Subtraction : {sub}</h1>
    <button onClick={()=>setSub(sub-1)}>Subtraction</button>

      
    </div>
  )
}

export default UseMemo
