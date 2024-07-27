import React,{useContext} from "react";
import { Golbalval } from "./App";

export default function ParentB()
{
    const{Parentdata}=useContext(Golbalval);
    return(
        <>
         <h1>Parent B</h1>
         <p>Data from Parent A : {Parentdata}</p>
        </>
    )
}