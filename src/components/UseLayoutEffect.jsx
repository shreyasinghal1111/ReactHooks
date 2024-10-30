import { useEffect, useLayoutEffect, useState } from 'react'

const UseLayoutEffect = () => {
    const[toggle,setToggle]=useState(false)

    useEffect(()=>{
        console.log("useEffect called")
    },[toggle])

    useLayoutEffect(()=>{
        console.log("useLayoutEffect called")
    },[toggle])

  return (
    <div>
    <button onClick={()=>setToggle(!toggle)}>Toggle</button>
    {toggle && <h1>Hello</h1>}
      
    </div>
  )
}

export default UseLayoutEffect
