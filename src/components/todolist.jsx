import React from 'react';
import { useState } from 'react';
const Todolist = () => {
    const [todo,setTodo] = useState([]);
    const [inp,setInp] = useState('');
    const deletetask = (id) => {
        setTodo((todo)=>todo.filter((task,index)=>index!==id))
    }
    return (
        <div style={{textAlign:'center',marginTop:'10px'}}>
            <h1>Todo List</h1>
            
            <input type="text" placeholder='Enter your todo' value={inp} onChange={(e)=>setInp(e.target.value)}/>
            {" "}
            <button onClick={()=>{{inp &&
                setTodo((prev)=>[...prev,inp])
                setInp('');}
            }}>Add Task</button>
            <ul style={{listStyle:'none'}}>
                {todo.map((task,id)=>{
                    return(
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
                        <li style={
                            {display:'flex',
                            justifyContent:'space-between',
                            width:'300px',
                            height:'20px',
                            padding:'10px',
                            border:'1px solid black',
                            borderRadius:'10px',
                            marginTop:'10px',
                            backgroundColor:'lightgrey',

                            fontSize:'20px',
                            fontWeight:'bold',
                            color:'black'
                            }

                        }  key={id}>{id+1} {task}</li><button onClick={()=>deletetask(id)}>Delete Task</button></div>
                        
                    )
                    
                })}
            </ul>
        </div>
    );
}

export default Todolist;
