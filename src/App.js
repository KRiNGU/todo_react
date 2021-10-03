import './App.css';
import ToDoList from './ToDoList/ToDoList';
import Filter from './Filter/Filter';
import './style.css';
import React, { useState } from 'react';

function App() {
  const [currentFilter, setCurrentFilter] = useState(localStorage.getItem('filter') ?? 'all');

  const handleToggleFilter = (filterType) => {
      setCurrentFilter(filterType);
  }

  return (
    <div className="container">
      <h1 className="title">TODOS</h1>
      <Filter 
        currentFilter={currentFilter}
        handleToggleFilter={handleToggleFilter}
      />
      <ToDoList 
        currentFilter={currentFilter}
      />
    </div>
  );
}

export default App;
