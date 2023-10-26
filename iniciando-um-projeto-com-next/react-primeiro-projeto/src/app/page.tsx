// npm run dev, para start
//"use client" para eventos de click
"use client"

import { useState } from "react";
import{Person2} from "@/types/Person2";
import { TodoItem } from "@/types/TodoItem";

const Page = () =>{
  const [itemInput, setItemInput] = useState('')
  const [list, setList] = useState<TodoItem[]>([
    {label: 'Fazer dever de casa', checked: true},
    {label: 'estudar a aula de react.js', checked:false}
  ]);

  const handAddButton = () => {
    if(itemInput.trim() === '') return;
    setList([...list,{label: itemInput, checked: false}]);
    setItemInput('')
  }

  const deleteItem = (index:number) => {
   setList(list.filter((item,key) => key !== index))
  }
  
  const toggleItem = (index:number) => {
    let newList = [...list];
    newList[index].checked = !newList[index].checked;

    setList(newList);
  }

  return ( 
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div>
        <input type="text"
        placeholder="O que deseja Fazer?"
        className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
        value={itemInput}
        onChange={e => setItemInput(e.target.value)} />
        <button onClick={handAddButton}>Adicionar</button>
      </div>
      <p className="my-5">{list.length} itens na lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item, index) => (
          <li key={index}>
            <input onClick={() => toggleItem(index)} type="checkbox" checked={item.checked} className="w-4 h-4 mr-3"/>
            {item.label} - <button onClick={() => deleteItem(index)} className="hover:underline">[deletar]</button></li>
        ))}
      </ul>
     
  </div>
  )
}


export default Page;
