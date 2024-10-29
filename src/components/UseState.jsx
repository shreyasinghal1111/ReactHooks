import {useState} from 'react'

const UseState = () => {
    const[count,setCount]=useState(0)
    const[name,setName]=useState("")
  return (
    <div>
    <input type="text" placeholder='Enter here' onChange={(e)=>setName(e.target.value)}/>
    <h1>{name} has changed {count} times</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
      
    </div>
  )
}

export default UseState
