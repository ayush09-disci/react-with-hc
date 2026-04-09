import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const addTodoHandler = (e)=>{
        if(input.trim() !== ""){
            e.preventDefault();
            dispatch(addTodo(input));
            setInput("")
        }
    }
  return (
    <div>
        <form action="" onSubmit={addTodoHandler}>
            <input 
            className='bg-gray-700 w-80/100 text-white px-4 py-1 rounded-xl mt-4 outline-0'
            type="text"
            placeholder='enter todo'
            value={input}
            onChange={(e)=> setInput(e.target.value)} />
            <button
            className="bg-blue-600  hover:bg-blue-800 px-5 py-1 ml-1 rounded-xl"
            >Add</button>
        </form>
    </div>
  )
}

export default AddTodo