import { CountContext } from "@/contexts/CountContext"
import { useContext } from "react";



export const OnLineUsers = () => {
    const countCtx = useContext(CountContext);

    const HandleBanAll = () =>{
        countCtx?.setOnlineCount(0)
    }

    return (
        <>
         <p>Online: {countCtx?.onlineCount}</p>
        <button onClick={HandleBanAll}>Banir todo Mundo</button>
        </>
       
    )
}