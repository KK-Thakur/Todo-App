import React, { createContext, useState } from 'react'
import { TodoContext } from '../context/TodoConetxt'

const InputTodo = ({ prop }) => {
    const [todoText, setTodoText] = useState("")
    // const {todos,setTodos}= createContext(TodoContext);
    const addTodo = () => {
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        }
        prop.setTodos((prev) => [todo, ...prev]);
        setTodoText("");
    }

    const deleteAllTodos = () => {
        prop.setTodos([]);
    }
    return (
        <>
            <p >Add a TODO...</p>
            <div>
                <input
                    value={todoText}
                    type="text" placeholder="What to do ?"
                    className="input-text"
                    onChange={(e) => setTodoText(e.target.value)}
                    onKeyDown={(e) => { if (e.key == "Enter") { addTodo() } }}
                />
                <button
                    type="button"
                    className="btn btn-success add-btn" id="add-btn"
                    onClick={addTodo}
                >ADD TODO</button>
            </div>
            <div id='deleteAllBtnDiv'>
                <button
                    type="button"
                    className="btn btn-danger add-btn  dis" id="delete-all-btn"
                    onClick={deleteAllTodos}
                >Delete All</button >
            </div>
        </>
    )
}

export default InputTodo