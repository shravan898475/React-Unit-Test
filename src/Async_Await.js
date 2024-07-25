import React,{useState,useEffect} from "react";
import axios from "axios";

export default function Asyncawait()
{
  const[data,setData]=useState('');

  useEffect(()=>
    {
        const fetchdata = async () =>
        {
            try
            {
                const result= await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(result.data);
                console.log(result.data);

            } catch (error)
            {
                console.log('error message : '+error)
            }
        }

        fetchdata();
    },[])

    return(
        <>
        </>
    )
}