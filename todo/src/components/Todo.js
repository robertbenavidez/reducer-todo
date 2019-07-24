import React from 'react';

const Todo = props => {
    console.log(props)
  return (
    <div
      onClick={() => props.toggleTodo(props.item.id)}
    >
      <p>{props.todo.item}</p>
    </div>
  );
};

export default Todo;
