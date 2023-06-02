import React from 'react';

const Todo = ({ todo, index, handleComplete, handleDelete }) => {
  return (
    <div>
      <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
        {todo.text}
      </span>
      <button onClick={() => handleComplete(index)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
};

export default Todo;
