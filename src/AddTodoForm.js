// AddTodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoReducer';

const AddTodoForm = () => {
  const [todoName, setTodoName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoName.trim()) {
      const newTodo = {
        id: Date.now().toString(),
        name: todoName,
        status: 'pending',
      };
      dispatch(addTodo(newTodo));
      setTodoName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        placeholder="Enter a todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
