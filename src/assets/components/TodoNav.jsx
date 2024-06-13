import React from "react";
import { Link } from "react-router-dom";

const TodoNav = () => {
  return (
    <nav className="todo-nav">
      <ul>
        <li>
          <Link to="/add-todo">Add Todo</Link>
        </li>
        <li>
          <Link to="/all-todo">All Todos</Link>
        </li>
        <li>
          <Link to="/completion">Completion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TodoNav;
