import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../actions"

function AddTodo() {
    const todoList = useSelector(state => state)
    const dispatch = useDispatch();
    let input
    const handleOnSubmit =(e)=>{
        e.preventDefault()
        dispatch(addTodo(input.value));
        input.value="";
    }

    return (
        <div>
            <form onSubmit ={handleOnSubmit}>
                <input ref={node => input = node}/>
                <button type="submit">Add Todo</button>
            </form>
            <h1>Todo List</h1>
            {todoList.map(el => 
                <div key={el.id}>
                    {el.text}
                </div>)}
        </div>
    )
}
export default AddTodo;