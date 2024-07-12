import React from "react";

const Todo = ({todo,setTodos,todos}) => {

  const deleteTodo = (id) => {
    setTodos(todos.filter((item)=> item.id !== id))
  }

  const completedTodo = (id) => {
    setTodos(todos.map((item)=>{
      if (item.id === id) {
        return{
          ...item, completed: !item.completed
        }
      }
      return item
    }))
  }

  return (
    <div className={`todo ${todo.completed ? "completed": ""}`}>
      <button onClick={()=>completedTodo(todo.id)} className="complete-btn">
        <i className="fas fa-check-circle"></i>
      </button>
      
      <li className="todo-item">{todo.todoName}</li>

      <button onClick={()=> deleteTodo(todo.id)} className="trash-btn">
        <i className="fa fa-minus-circle"></i>
      </button>
    </div>
  );
};

export default Todo;
