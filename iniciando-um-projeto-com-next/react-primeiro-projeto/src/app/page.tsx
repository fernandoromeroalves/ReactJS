// npm run dev, para start
//"use client" para eventos de click
"use client"

import { FormEvent, useState } from "react";

const Page = () =>{

  const [showSecret, setShowSecret] = useState(false);

  const handlerClickButton =()=>{
    setShowSecret(!showSecret);
  }

  return (
    <div className="container w-screen h-screen  flex-col flex justify-center items-center">
      <button className="p-3 text-white bg-blue-700 rounded-md mr-3" onClick={handlerClickButton}>{showSecret ? 'ocultar' : 'mostrar'}</button>
      {showSecret &&
      <div className="p-3 bg-blue-600 rounded-md mt-3">area secreta</div>
    }
  </div>
  )
}


export default Page;
