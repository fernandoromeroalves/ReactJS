"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'


/*
1. definição da função que vai rodar
2. definição de QUANDO  vai rodar
3. definição do que fazer quando o componente sumir/unload 
*/

export default function Home() {

  const [name,setName] = useState('Fernando')
  const [age,setAge] = useState(37)

useEffect(()=>{
  console.log('rodou o effect!!')
},[name]);



  return (
   <div className=''>
    <p>Meu Nome é: {name}, idade {age} </p>
    <button className='border border-solid-white p-3 m-2 rounded-md' onClick={()=> setName('fernando romero alves')}>Mudar para nome completo</button>
    <button className='border border-solid-white p-3 m-2 rounded-md' onClick={()=> setName('fernando')}>Mudar para primeiro nome</button> <br />
    <button className='border border-solid-white p-3 m-2 rounded-md' onClick={()=> setAge(27)}>mudar para 27 anos</button>
    <button className='border border-solid-white p-3 m-2 rounded-md' onClick={()=> setAge(37)}>voltar para 37 anos</button> 
   </div>
  )
}
