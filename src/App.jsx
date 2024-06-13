import "./App.css";
import TodoNav from "./assets/components/TodoNav";
import AddTodo from "./assets/components/AddTodo";
import AllTodos from "./assets/components/AllTodos";
import Completion from "./assets/components/Completion";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <TodoNav />
      <Routes>
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/all-todo" element={<AllTodos />} />
        <Route path="/completion" element={<Completion />} />
      </Routes>
    </>
  );
}

export default App;
