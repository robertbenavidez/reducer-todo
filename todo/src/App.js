import React, {useReducer} from 'react';
import TodoList from './components/TodoList';


import { reducer, initialState } from './reducers/reducer';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <h1>Reducer Todo App</h1>
      <TodoList tasks={state.tasks} />
    </div>
  );
}

export default App;
