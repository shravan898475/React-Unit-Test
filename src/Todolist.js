import React, { useContext } from 'react';
import { Golbalval } from './App';

export default function Todolist() {
  const todoarr = useContext(Golbalval);
  const todoarray=todoarr.todoarr;
 const Deletetodo=(val)=>
 {
    console.log(todoarray)
    todoarray.splice(val, 1);
    console.log(val)
    console.log(todoarray)
 }
 
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Todo</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todoarray.length > 0 ? (
            todoarray.map((todo, index) => (
              <tr key={index}>
                <td>{todo}</td>
                <td>
                  <button onClick={() => Deletetodo(`${index}`)}>Delete</button>
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
