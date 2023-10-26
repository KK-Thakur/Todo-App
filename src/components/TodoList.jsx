import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TodoList = ({ prop }) => {
  const todo = prop.todo;
  const todos = prop.todos;
  const setTodos = prop.setTodos;

  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.text);


  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>{
        if(prevTodo.id==id){
          return {...prevTodo, completed: !prevTodo.completed}
        }
        else{
          return prevTodo;
        }
      }))
  }

  const updateTodo = (id, todo) => {
    /*
    const newTodo = todo;
    todo.text=todoMsg;
    */
   //or
    const newTodo = { ...todo, text: todoMsg }
    /*
    const newTodos=todos.map((prevTodo) => {
      if (prevTodo.id === id) {
        return newTodo
      }
      else {
        return prevTodo
      }
    })
    setTodos(newTodos);
    */
   //or
    setTodos((prev)=> prev.map((todo)=> todo.id===id ? newTodo : todo));
    setIsTodoEditable(false);
  }
  
  //delete fn
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  }

  const notify = () => {
    toast.success('🎉 Congrats task completed!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }


  return (
    <li key={todo.id} style={{backgroundColor: `${todo.completed ? '#bfbfbf':""}`}}>
      <input
        type="checkbox"
        className="check"
        checked={todo.completed}
        onChange={() =>{
          toggleCompleted(todo.id);
          if(!todo.completed){
            notify();
          }
        }}
      />

      <input
        type="text" className={`todo-text ${todo.completed ? 'todo-text-line':""}`}
        readOnly={!isTodoEditable}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />

      {/* Edit, save btn */}
      <button
        type="button"
        className="btn btn-light edit-btn"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            updateTodo(todo.id, todo);
          }
          else {
            setIsTodoEditable((prev) => !prev); //setIsTodoEditable(true);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete Todo Button */}
      <button
        type="button"
        className="btn btn-light delete-btn"
        onClick={() => deleteTodo(todo.id)}
      >❌</button>
      <ToastContainer />
    </li >
  )
}

export default TodoList