"use client"





import { Square } from "@/components/Square";
import { useState } from "react"

export default function Home() {

  const [show, setShow] = useState(false);


  return (
    <div className="">
      <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button> <br />

      {show && <Square/>}
    </div>
  )
}


