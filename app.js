import React, { useState } from 'react';
import Todo from './todo.js';
import TodoForm from './todoform.js';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          handleComplete={completeTodo}
          handleDelete={deleteTodo}
        />
      ))}
    </div>
  );
};

export default App;
