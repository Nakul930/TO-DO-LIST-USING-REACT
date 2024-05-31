import React, { useState } from 'react';
import './App.css';                                        //Imports

function App() {
  const [todos, setTodos] = useState([]);              //useState hook is imported to manage state. also todos is use to store the list of to-dos items
  const [newTodo, setNewTodo] = useState('');             //newTodo is used to add new string input or new todo item

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);                         //updates the value from the input field(newtodo)
  }; 

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {                                   //handleaddtodo adds new todo items to the todo list
      const timestamp = new Date().toLocaleString();
      setTodos([...todos, { text: newTodo, time: timestamp }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);              // function for deleting todos
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>                             
        <div className="input-container">
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}   // Input for the todo
            placeholder="Add a new task"
          />
          <button onClick={handleAddTodo}>Add</button>       
        </div>                                
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <div>
                <span>{todo.text}</span>          
                <br />
                <small>{todo.time}</small>
              </div>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>  
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
