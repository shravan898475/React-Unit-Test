import React, { useContext,useState } from 'react';
import { Golbalval } from './App';

export default function Todolist() {
  const { todos, addTodo, removeTodo } = useContext(Golbalval);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => 
    {
      if(newTodo=='')
      {
        alert('Please enter somthing')
      }
      else
      {
        addTodo(newTodo);
        setNewTodo('');
      }
     
    };

  return (
    <div className="container">
          <div className='text-center'>
          <h1>To-Do List</h1>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
          </div>
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Todo</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo}</td>
                <td>
                <button onClick={() => removeTodo(index)}>Remove</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No todos available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
