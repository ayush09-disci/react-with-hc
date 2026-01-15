import {useContext,createContext} from "react"

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"",
            completed:false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{},
})

export function useTodo(){
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;