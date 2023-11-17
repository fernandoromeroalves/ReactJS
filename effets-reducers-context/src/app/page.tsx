"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'


/*
1. definição da função que vai rodar
2. definição de QUANDO  vai rodar
3. definição do que fazer quando o componente sumir/unload 
*/

export default function Home() {

  const [firstName,setFirstName] = useState('Fernando');
  const [lastName,setLasttName] = useState('romero');
  

const fullName = firstName + ' ' + lastName


  return (
   <div className=''>
    <p>Meu nome é: {fullName}</p>
    <button className='border border-solid-white p-3 m-2 rounded-md' onClick={()=> setFirstName('higlander')}>Mudar para nome completo</button>
    <button className='border border-solid-white p-3 m-2 rounded-md' onClick={()=> setLasttName('')}>Mudar para primeiro nome</button> <br />
     
   </div>
  )
}
