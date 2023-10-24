import React, { useEffect } from "react";

/// useState and useEffect are two Hooks
//  Every Component needs to start with capital letter and every Hook mush start with 'use'
//  Any function which uses Hook and returns sort of a Hook value is called a Custom Hook

function useTodos(){
  const [todos , setTodos] = React.useState([]);
  React.useEffect(() => {

    fetch("http://localhost:3000/todos", {
        method: "GET"
      }).then((response) => {
        response.json().then((data) => {
          console.log(data);
          setTodos(data);
        })
      })

    setInterval(() => {
      fetch("http://localhost:3000/todos", {
        method: "GET"
      }).then((response) => {
        response.json().then((data) => {
          console.log(data);
          setTodos(data);
        })
      })
    }, 1000)
  }, []);
  
  return todos;
}


function App() {
  const todos = useTodos();

  return (
    <div>
      {todos.map(todo => {
        return <div>
          {todo.title}
          {todo.description}
          <button>Delete</button>
          <br />
        </div>
      })}
    </div>
  )
}

export default App;