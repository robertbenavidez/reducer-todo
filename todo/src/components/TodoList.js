import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
      <div >
          {props.tasks.map(todo =>(
            <Todo  key={todo.id} todo={todo} />) )}
          
        <button  >
          Completed
        </button>
      </div>
    );
  };

export default TodoList;
