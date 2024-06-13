import React, { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    storedTodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(storedTodos));
    console.log(todo);
    // Optionally, you can clear the form after submission
    setTodo({
      id: "",
      title: "",
      description: "",
      startTime: "",
      endTime: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={todo.id}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={todo.description}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Start Time:</label>
          <input
            type="time"
            name="startTime"
            value={todo.startTime}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>End Time:</label>
          <input
            type="time"
            name="endTime"
            value={todo.endTime}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
