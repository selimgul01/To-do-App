import React, { useState } from 'react'

const Form = ({setTodos}) => {

  const [todoName,setTodoName] = useState("")

  const changeName = (event) => {
    setTodoName(event.target.value)
  }

  const addTodo = (event) => {
    event.preventDefault()


    if (todoName.trim().length === null) {
      return
    } else {
      
      const newTodo = {
        id: Math.floor(Math.random()*1000),
        todoName:todoName,
        completed:false
      }

      setTodos((prevState) => [
        newTodo,
        ...prevState
      ])

      setTodoName("")

    }

  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <div className="search">
          <input value={todoName} onChange={changeName} type="text" className="todo-input" placeholder="Add..." />
          <button className="todo-button" type="submit">
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
        <div className="alert-wrapper">
          <div className="alert-success">
            <div>Ekleme Başarılı.</div>
          </div>
          <div className="alert-warning">
            <div>Input alanı boş geçilemez!</div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
