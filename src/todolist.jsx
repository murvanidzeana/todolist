
import React,{useState} from "react";
import './todolist.css'




export default function Todolist(){
    const[newItem,setnewItem]=useState('');

    const [todolist,settodolist]=useState([
        {title:"",
        id: 1,
        styles:true
    },
       
    ])
    


    function add(){
      
        settodolist((prev) => [...prev,{title:newItem}])}
       

       
    
       const textDecorate=(id)=>{
        const newtodolist= todolist.map ((item)=>{
            if(item.id===id) item.styles =!item.styles;
             return item
         
            })
        settodolist(newtodolist) }

         
       
      
    
  
    return (
       
      <div className="todo_list">
  
     
  
         <div >
        <input type='text' 
        placeholder='Create new task' onChange={(e)=>setnewItem(e.target.value)}  ></input>
        <button onClick={add}>Add</button>
        </div>
        
          
     
    <div className="sia">
   
        <ul> 
  
  {todolist.map((todo)=>(<li  style={{textDecoration:todo.styles?"line-through":"none"}} onClick={()=>textDecorate(todo.id)} >{todo.title}</li>))}
    
</ul> 
</div>

      
      </div>
      
  
    )}