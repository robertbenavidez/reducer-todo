import React, {useReducer} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


import { reducer, initialState } from './reducers/reducer';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTodo = (event, item) => {
    event.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: item });
  };

  const toggleTodo = taskID => {
    dispatch({ type: 'TOGGLE_TODO', payload: taskID });
  };

  return (
    <div className="App">
      <h1>Reducer Todo App</h1>
      <TodoForm addTodo={addTodo} toggleTodo={toggleTodo} />
      <TodoList tasks={state.tasks} />
    </div>
  );
}

export default App;
