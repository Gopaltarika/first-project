import React, { useState, useEffect } from "react";

const AllTodos = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);
  
  const markAsDone = (index) => {
    const newTodos = [...todos];
    const completedTodo = newTodos.splice(index, 1)[0];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));

    const completedTodos = JSON.parse(localStorage.getItem("todoscomplete")) || [];
    completedTodos.push(completedTodo);
    localStorage.setItem("todoscomplete", JSON.stringify(completedTodos));
  };

  return (
    <div className="todos-container">
      <h2>All Todos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.startTime}</td>
              <td>{todo.endTime}</td>
              <td>
                <button className="btn" onClick={() => markAsDone(index)}>
                  Done
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTodos;
