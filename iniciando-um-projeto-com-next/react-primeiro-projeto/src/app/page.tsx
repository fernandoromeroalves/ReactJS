// npm run dev, para start
//"use client" para eventos de click
"use client"

import { useState } from "react";

const Page = () =>{
  const [count, setCount] = useState(0);
  
  const handleBtnClick = () =>{
    setCount(count + 2);
    alert(count + 2)
    
    
  }

  return (
    <div className="container w-screen h-screen  flex-col flex justify-center items-center">
      <p className="text-4xl">{count}</p>
      <button onClick={handleBtnClick} className="bg-blue-600 rounded-md text-white p-4 text-4xl">+2</button>
  </div>
  )
}


export default Page;
