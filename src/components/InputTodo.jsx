import React, { createContext, useState } from 'react'
import { TodoContext } from '../context/TodoConetxt'

const InputTodo = ({ prop }) => {
    const [todoText, setTodoText] = useState("")
    // const {todos,setTodos}= createContext(TodoContext);
    const todos=prop.todos;
    const addTodo = () => {
        if(todoText.length===0){
            return;
        }
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        }
        prop.setTodos((prev) => [todo, ...prev]);
        setTodoText("");
    }

    const deleteAllTodos = () => {
        if(confirm("All Items get deleted")){
            prop.setTodos([]);
        }
    }
    //fn to calculate tasks todo
    function tasksTodo(){
        let unCompleted=0;
        todos.map((todo)=>{
            if(!todo.completed) unCompleted++;
        })
        return unCompleted;
    }
    return (
        <>
            <p >Add a TODO...</p>
            <div>
                <input
                    required={true}
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
                <span><b>Tasks ToDo: {tasksTodo()}</b> </span>
                {prop.todos.length >0 && 
                <button
                    type="button"
                    className="btn btn-danger add-btn  dis" id="delete-all-btn"
                    onClick={deleteAllTodos}
                >Delete All</button >
                }
            </div>
        </>
    )
}

export default InputTodo