import React, { useEffect, useState } from 'react'
import "./App.css"
import Form from './components/Form'
import TodoList from './components/TodoList'


const App = () => {

  const [todos,setTodos] = useState([])

  useEffect(()=>{
    getLocalStorage()
  },[])

  useEffect(()=>{
    saveLocalStorage()
  },[todos])

  const saveLocalStorage = () => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const getLocalStorage = () => {

    if (localStorage.getItem("todos") === null ) {
      localStorage.setItem("todos",JSON.stringify([]))
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }

  return (
    <div className='App'>
      <header>
        <h1>MY TO-DO LIST</h1>
      </header>
      <Form setTodos={setTodos} />
      <TodoList todos={todos}  setTodos={setTodos} />
    </div>
  )
}

export default App
