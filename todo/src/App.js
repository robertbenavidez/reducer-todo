import React, {useReducer} from 'react';

import { reducer, initialState } from './reducers/reducer';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div className="App">
      <h1>Reducer Todo App</h1>
    </div>
  );
}

export default App;
