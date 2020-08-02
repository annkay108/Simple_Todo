import React from "react";

const TodoList=({ todos, toggleTodo })=>{
    return(
        <ul>    
            {todos.map(el => 
            <li 
                key={el.id} 
                onClick={()=>toggleTodo(el.id)}
                style= {{
                    textDecoration: el.completed ? 'line-through' : 'none'
                }}
            >
                {el.text}
            </li>)}
        </ul>
    )
}

export default TodoList;