"use client"

import { useState } from "react"
import { VideoPlayer } from "./components/VideoPlayer";

export default function Home() {

  const [playing, setPlaying] = useState(false);


  return (
    <div className=''>
      <div className=" border border-white p-3 mb-4 ">
        <p className="text-2xl mb-4 p-3 text-blue-300">{playing ? 'RODANDO' : 'PAUSADO'}</p>
        <button className="border border-blue-900 p-2 rounded-md m-2 bg-blue-300 text-black" onClick={()=> setPlaying(!playing)}>Play/Pause</button>
      </div>

      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      />
    </div>
  )
}
