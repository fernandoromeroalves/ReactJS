"use client"
import { useReducer, useState } from "react"
import { Item } from "@/types/item";
import { listReducer } from "@/reducers/listReducer";


export default function Home() {
  const [list, dispatch] = useReducer(listReducer, [])

  const handleAddClick = ()=>{
    dispatch({
      type:'add',
      payload: {
        text:'novo item'
      }
    });
  }

  dispatch({
    type: 'toggleDone',
    payload:{id: 2}
  });
  dispatch({
    type: 'editText',
    payload:{id: 2, newText:'bla bla bla'}
  });

  return (
    <div className=''>
      <button onClick={handleAddClick}>Adicionar</button>
    </div>
  )
}
