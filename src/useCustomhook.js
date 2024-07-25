import {useState,useEffect} from "react";

export default function useCustomehook(arg1,arg2)
{
   const[sumval,setSumval]=useState(0);

   useEffect(()=>{
    const sum=arg1+arg2;
    setSumval(sum)
   },[arg1,arg2])

   return [sumval];
}