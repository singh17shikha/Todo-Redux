// TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoStatus } from './todoReducer';
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleStatus = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.name}</span>
          <button onClick={() => handleToggleStatus(todo.id)}>
            {todo.status === 'pending' ? 'Mark Completed' : 'Mark Pending'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
