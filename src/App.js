import "./App.css";
import ToDoList from "./ToDoList/ToDoList";
import Filter from "./Filter/Filter";
import "./style.css";
import React from "react";

function App() {
  return (
    <div className="container">
      <h1 className="title">TODOS</h1>
      <Filter />
      <ToDoList />
    </div>
  );
}

export default App;
