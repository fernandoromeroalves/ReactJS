// npm run dev, para start
//"use client" para eventos de click
"use client"

import { useState } from "react";
import{Person2} from "@/types/Person2";

const Page = () =>{
  const [fullName, setFullName] = useState<Person2>({name:'',lastName: ''});
  
  const handleClearButton = () => {
    setFullName({name:'',lastName: ''});
  }
  

  return (
    <div className="container w-screen h-screen  flex-col flex justify-center items-center">
      <input type="text"
      placeholder="Nome"
      className="border border-black p-3 text-2xl text-black rounded-md mb-3" 
      value={fullName.name}
      onChange={e => setFullName({...fullName, name: e.target.value})}/>
      <input type="text"
      placeholder="Sobrenome"
      className="border border-black p-3 text-2xl text-black rounded-md mb-3" 
      value={fullName.lastName}
      onChange={e => setFullName({...fullName,lastName: e.target.value})}/>
      <p>Meu nome completo é:</p>
      <p>{fullName.name} {fullName.lastName}</p>

      <button onClick={handleClearButton} className="border border-white bg-blue-600 p-2 rounded-md mt-2">limpar tudo</button>
  </div>
  )
}


export default Page;
