// npm run dev, para start
//"use client" para eventos de click
 /*
  useEffect()
  1.definição da função que vai rodar.
  2.definição de quando vai rodar.
  3.definição do que fazer quando o componente sumir/unpload
  */
"use client"

import { useEffect, useState } from "react";



const Page = () => {
  
  const [name, setName] = useState('fernando');
  const [age, setAge] = useState(37)
  
  useEffect(()=>{
    console.log('rodou o effect')
  }, [name]);

 

  return ( 
    <div className="">
      <p>Meu Nome é {name} e tenho {age} anos</p>

      <button className=" rounded-md bg-blue-700 border border-solid mt-5 p-2 mr-2" onClick={()=>{setName('Pedro')}}>Mudar para pedro</button>
      <button className=" rounded-md bg-blue-700 border border-solid mt-5 p-2 mr-3" onClick={()=>{setName('João')}}>Mudar para joao</button>
      <button className=" rounded-md bg-blue-700 border border-solid mt-5 p-2 ml-2" onClick={()=>{setAge(27)}}>Mudar para 27 anos</button>
      <button className=" rounded-md bg-blue-700 border border-solid mt-5 p-2 ml-2" onClick={()=>{setAge(47)}}>Mudar para 47 anos</button>
  </div>

  )
}


export default Page;
