import React from 'react';
import './App.css';
import Todos from './Components/Todos/Todos';

/* 
Plan: I want a list of todo elements I want a modal that lets people add todo Elements
Mobile responsive 
Save todo elements into DB when completed 
Save updates the todo elements like getting crossed off, deleted, edited 
UI idea have a todo list in the center, a add todo btn center bottom of list 
Add todo opens a modal that says what is the todo 
Each todo in the list has the todo an onclick !cancel event and a delete btn and edit btn 
 */

function App() {
  return (
    <div className="App">
      <div id='modal-location'></div>
      <h2>Todo List Project TS</h2>
      <Todos/>
    </div>
  );
}

export default App;
