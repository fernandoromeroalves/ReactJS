'use client'
import { Header } from "@/components/Header"
import { CountContext } from "@/contexts/CountContext"
import { useState } from "react"

  

export default function Home() {
  const [onlineCount, setOnlineCount] = useState(92)

  return (
    <div className="container mx-auto">
      <CountContext.Provider value={{onlineCount, setOnlineCount}}>
      <Header/>
      </CountContext.Provider>
      
    </div>
  )
}
