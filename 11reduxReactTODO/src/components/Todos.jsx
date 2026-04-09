import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const [isTodoEditable, setIsTodoEditable] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleEdit = (todo) => {
    setIsTodoEditable(todo.id);
    setEditedTodo(todo.text);
  };

  const handleSave = (id) => {
    dispatch(updateTodo({ id, text: editedTodo }));
    setIsTodoEditable(null);
  };

  return (
    <div className="p-4 bg-gray-400">
      {todos.map((todo) => (
        <li key={todo.id} classNam  e="mb-2">
          <input
            type="text"
            value={
              isTodoEditable === todo.id ? editedTodo : todo.text
            }
            onChange={(e) => setEditedTodo(e.target.value)}
            readOnly={isTodoEditable !== todo.id}
          />

          {isTodoEditable === todo.id ? (
            <button onClick={() => handleSave(todo.id)}>
              Save
            </button>
          ) : (
            <button onClick={() => handleEdit(todo)}>
              Edit
            </button>
          )}

          <button onClick={() => dispatch(removeTodo(todo.id))}>
            🗑️
          </button>
        </li>
      ))}
    </div>
  );
}

export default Todos;
