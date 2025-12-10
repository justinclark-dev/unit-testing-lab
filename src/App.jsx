import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    const createNewTodo = (event.target.value);
    setNewTodo(createNewTodo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: todos.length + 1, text: newTodo }]);
    setNewTodo('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <h1>TODO App</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="new-todo" 
          value={newTodo}
          onChange={handleInputChange}
          placeholder='Enter TODO'
        />
        <button type="submit">
          Add
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}
          
          <button
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
          
          </li>
        ))}
      </ul>
    </>
  )
};

export default App;
