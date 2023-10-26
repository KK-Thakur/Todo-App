import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList'
import { TodoContextProvider } from './context/TodoConetxt'


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoContextProvider value={{ todos, setTodos }}>
      <div id='main-div'>
        <Header />
        <div id="container">
          <InputTodo prop={{ todos, setTodos }} />

          {/* TodoList */}
          <div className="list">
            <ul type="circle" id="bounding-box">
              {todos.map((todo) => (
                <TodoList key={todo.id} prop={{ todo, todos, setTodos }} />
              ))}
            </ul>
          </div>
        </div >
      </div>
    </TodoContextProvider>
  )
}

export default App
