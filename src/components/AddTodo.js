import React from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "../actions"

function AddTodo() {
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
        </div>
    )
}
export default AddTodo;