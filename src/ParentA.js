import React,{useContext} from "react";
import { Golbalval } from "./App";

export default function ParentA()
{
    const{setParent}=useContext(Golbalval);
    
    return(
        <>
          <h1>Parent A</h1>
          <button onClick={()=>setParent('this is from Parent')}>Add Parent data</button>
        </>
    )
}