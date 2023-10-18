// npm run dev, para start
//"use client" para eventos de click
"use client"

import { useState } from "react";

const Page = () =>{
  const [count, setCount] = useState(0);
  
  const handleBtnClick = () =>{
    setCount(count + 2);
    setCount(c => c + 2);
    setCount(c => c + 2);
    
    
    
  }

  return (
    <div className="container w-screen h-screen  flex-col flex justify-center items-center">
      <p className="text-4xl">{count}</p>
      <button onClick={handleBtnClick} className="bg-blue-600 rounded-md text-white p-4 text-4xl">+6</button>
  </div>
  )
}


export default Page;
