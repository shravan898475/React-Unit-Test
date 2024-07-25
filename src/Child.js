import React,{useContext} from 'react';
import { Golbalval } from './App';

export default function  Child()
{
  
  const{colorval,nameval}=useContext(Golbalval)
  
  return(
    <>
      <h1>Name : {nameval}</h1>
      <p style={{color:colorval}}>Context Api</p>
    </>
  )
}