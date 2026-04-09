import { createContext,useContext } from "react";

export const TodoContext = createContext(
    //default value
    {
        todos:[
            {
                id : 1,
                todo :"todo msg",
                completed : false,
            }
        ],
        addTodo: (todo)=>{},
        updateTodo: (id,todo)=>{},
        deleteTodo: (todo)=>{},
        toggleComplete: (todo)=>{},
    }
);

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}