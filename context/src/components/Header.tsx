import { CountContext } from "@/contexts/CountContext"
import { OnLineUsers } from "./OnLineUsers"
import { useContext } from "react"

export const Header = () => {

    const countCtx = useContext(CountContext)
    return(
        <header>
            <h1 className="text-3xl">Título da Pagina({countCtx?.onlineCount})</h1>
            <OnLineUsers/>
        </header>
    )
}