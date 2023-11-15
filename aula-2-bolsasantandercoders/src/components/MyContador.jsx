import { useState } from "react"



export default function MyContador(){

    const [contador, setContador] = useState(0)


function aumentar(){
    setContador(contador + 1)

}
function diminuir(){
    setContador(contador - 1)

}

if(contador >5){
    return (
    <div>
        <h1>{contador}</h1>
       <h1>Contador maior que 5</h1>
        <button onClick={diminuir}>diminuir</button>
        <button onClick={aumentar}>aumentar</button>
    </div>
    )
} else{
    return(
    <div>
        <h1>{contador}</h1>
        <h1>Contador menor que 5</h1>
        <button onClick={diminuir}>diminuir</button>
        <button onClick={aumentar}>aumentar</button>
    </div>
    )
}


   
}