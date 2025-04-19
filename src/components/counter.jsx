import React from 'react';
import { useState } from 'react';
const Counter = () => {
    const [count,setCount] = useState(0);
    const [inputval,setInputval] = useState(0);
    const handleClick = () => {{inputval &&
        setCount((prevCount) => prevCount + parseInt(inputval));
        setInputval('');}
    }
    return (
        <div className='counter'>
          <h1>{count}</h1>
          
            <br />
       <div> 
            <button onClick={()=>setCount((precount)=>precount+1)}>Increment</button>
            {" "}
            <button onClick={()=>setCount((prevcount)=>prevcount-1)}>Decrement</button>
            {" "}
            <button onClick={()=>setCount(0)}>Reset</button>
       </div>
       <br />
       <div>     
          <input type="text" placeholder='Specific number u want to use' value={inputval} onChange={(e)=>setInputval(e.target.value)}/>
          {" "}
          <button type='submit' onClick={handleClick}>Add</button>
          {" "}
          <button onClick={()=>{inputval &&
            setCount((prevcount)=>prevcount-parseInt(inputval));
            setInputval('');
          }}>Subtract</button>
       </div>
        </div>
    );
}

export default Counter;
