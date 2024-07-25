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
  const[inputval,setInputval]=useState('');
  const[todoarr,setTodoarr]=useState('');


  const Inputchange = (event)=>
  {
     setInputval(event.target.value);
  }

  const Addtodo =()=>
  {
     if(inputval=='')
     {
      alert('Please Enter Somthing')
     }
     else
     {
      setTodoarr(prevTodos => [...prevTodos, inputval]);
      setInputval(''); // Clear input field after adding todo

     }
      
    
  }

  return (
   
    <Golbalval.Provider  value={{colorval:color,nameval:name,todoarr:todoarr}}>
       <h1>Hello Shravan</h1>
       <p>Custome Hooks Sum: {sumval}</p>
       <Child/>
      
       
       <div className='container'>
          <div className='text-center'>
              <div>
                <input type="text"
                 placeholder='Enter Somthing'
                 value={inputval}
                 onChange={Inputchange}
                />
                <button onClick={Addtodo}>Add Todo</button>
              </div>
          </div>
       </div>

       <Todolist/>
       <Asyncawait/>

    </Golbalval.Provider>
     
     
  );
}

