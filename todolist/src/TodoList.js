import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
const [todos, setTodos] = useState([]);
const [inputValue, setInputValue] = useState('');

const handleInputChange = (event) => {
setInputValue(event.target.value);
};

const handleFormSubmit = (event) => {
event.preventDefault();
if (!inputValue.trim()) {
return;
}
setTodos([...todos, { text: inputValue, completed: false }]);
setInputValue('');
};

const handleTodoDelete = (index) => {
const newTodos = [...todos];
newTodos.splice(index, 1);
setTodos(newTodos);
};

const handleCheckboxChange = (index) => {
const newTodos = [...todos];
newTodos[index].completed = !newTodos[index].completed;
setTodos(newTodos);
};

return (
<div>

  <h1>To-Do List</h1>

  <form onSubmit={handleFormSubmit}>
  <input class="todo" type="text" value={inputValue} onChange={handleInputChange} />
  <button class="addbtn" type="submit">Add</button>
  </form>

  <ul>

    {todos.map((todo, index) => (

      <li key={todo.index} style={{ textDecoration: todo.completed && 'line-through', textAlign: "left"}}>
      <input type="checkbox" checked={todo.completed} onChange={() => handleCheckboxChange(index)} />
      {todo.text}
      <button style={{ marginLeft: '15px', float: 'right', backgroundColor:'red', color: 'white' }} onClick={() => handleTodoDelete(index)}>Delete</button>
      </li>

    ))}

  </ul>

</div>
);
}

export default TodoList;