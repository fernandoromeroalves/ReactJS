"use client"

import { useReducer, useState } from "react"
import { Item } from "@/types/item";
import { listReducer } from "@/reducers/listReducer";



export default function Home() {
  const [list, dispatch] = useReducer(listReducer, [])
  const [addField, setAddField] = useState('')

  const handleAddButton = () => {
    if(addField.trim() === '') return false;

    dispatch({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    });
    setAddField('')
  }

  const handleDoneCheckbox = (id: number) =>{
    dispatch({
      type: 'toggleDone',
      payload:{id}
    })
  }

  return (
    <div className='container mx-auto'>
      <h1 className="text-center text-4xl my-4">lista de tarefas</h1>
      <div className="max-w-2xl  bg-gray-900 mx-auto flex rounded-md border border-gray-400 p-4 my-4">
        <input 
        type="text"  
        className="flex-1 rounded-md border bg-gray-700 border-white p-3 bg-transparent outline-none text-white" 
        placeholder="Digite um Item"
        value={addField}
        onChange={e => setAddField(e.target.value)}
        />
        <button onClick={handleAddButton} className="p-4  hover:text-gray-400">Adicionar</button>
      </div>
      <ul 
        className="max-w-2xl mx-auto">
        {list.map(item => (
          <li 
          key={item.id}
          className="flex p-3 my-3 border-b items-center border-gray-800 mx-2"
          > 
          <input 
          type="checkbox"
          className="w-5 h-5 mr-4 "
          checked={item.done}
          onClick={()=> handleDoneCheckbox(item.id)}
          defaultChecked = 'checked'         
          />
            <p className="flex-1 text-lg">{item.text}</p>
            <button className="mx-4 text-white hover:text-gray-500">Editar</button>
            <button className="mx-4  text-white hover:text-gray-500">Excluir</button>
            </li>
        ))}
      </ul>
      
    </div>
  );
}

