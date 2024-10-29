import {useRef} from 'react'

const UseRef = () => {
    const inputRef=useRef(null)
    const handleClick=()=>{
        inputRef.current.style.width="400px"
        inputRef.current.focus()
    }

  return (
    <div>
    <input type="text" ref={inputRef}/>
    <button onClick={handleClick}>Click Here</button>
      
    </div>
  )
}

export default UseRef
