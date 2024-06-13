import React, { useEffect, useState } from 'react';

const Completion = () => {
  const [localCompletedTodos, setLocalCompletedTodos] = useState([]);

  useEffect(() => {
    const storedCompletedTodos = JSON.parse(localStorage.getItem("todoscomplete")) || [];
    setLocalCompletedTodos(storedCompletedTodos);
  }, []);

  return (
    <div className='todos-container'>
      <h2>Completed Todos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {localCompletedTodos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.startTime}</td>
              <td>{todo.endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Completion;
