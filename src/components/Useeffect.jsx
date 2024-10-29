import { useState,useEffect } from 'react'

const Useeffect = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("useEffect called")
        document.title=`Clicked ${count} times`
    })
  return (
    <div>
    <h1>Messages :{count}</h1>
    <button onClick={()=>setCount(count+1)}>Click</button>
      
    </div>
  )
}

export default Useeffect
