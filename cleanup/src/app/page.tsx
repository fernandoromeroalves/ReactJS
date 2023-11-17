"use client"





import { useState } from "react"

export default function Home() {

  const [show, setShow] = useState(false);


  return (
    <div className="">
      <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>

      {show && </>}
    </div>
  )
}


