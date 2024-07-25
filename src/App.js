import React,{useState} from 'react';
import useCustomehook from './useCustomhook';
import { createContext } from 'react';
import Child from './Child';
import Todolist from './Todolist';
import Asyncawait from './Async_Await';

export const Golbalval=createContext();


export default function App() {

  const[sumval]=useCustomehook(5,5);
  const[color]=useState('red');
  const[name]=useState('shravan');
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    
  };

  return (
   
    <Golbalval.Provider  value={{colorval:color,nameval:name,todos, addTodo, removeTodo}}>
       <h1>Hello Shravan</h1>
       <p>Custome Hooks Sum: {sumval}</p>
       <Child/>
       <Todolist/>
       <Asyncawait/>

    </Golbalval.Provider>
     
     
  );
}

