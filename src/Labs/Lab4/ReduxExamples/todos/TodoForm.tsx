import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
    return (
        <li className="list-group-item d-flex">
        <input className = "form-control mr-auto" style={{maxWidth:'200px'}} value={todo.title}
            onChange={(e) =>
              dispatch(setTodo({ ...todo,
                title: e.target.value }))
            } />
            <div className="ms-auto">
            <button onClick={() => dispatch(updateTodo(todo))}
                  id="wd-update-todo-click" className="btn btn-warning mx-1">
            Update </button>
          <button onClick={() => dispatch(addTodo(todo))}
                  id="wd-add-todo-click" className = "btn btn-success mx-1">Add</button>
          </div>
            
        </li>
    );
  }
  