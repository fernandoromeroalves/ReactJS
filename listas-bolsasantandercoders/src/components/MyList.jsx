import { useState } from "react"
import { useEffect } from "react"

const minhaLista = [
    {id: '1', value: 'maça'},
    {id: '2', value: 'pera'},
    {id: '3', value: 'banana'}
]


    
export function MyList () {
    
    const [produts, setProduts] = useState(minhaLista)
    const [pesquisa, setPesquisa] = useState('')

        useEffect(
            ()=> {
                if(pesquisa){
                    const NewList = minhaLista.filter((item)=>{
                        return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                    })
                    setProduts(NewList)
                } else {
                    setProduts(minhaLista)
                }
                
            },
            [pesquisa])

    return (
        <div>
            <input type="text" placeholder="pesquise aqui" name="" id="" 
            value={pesquisa}
            onChange={(e)=>setPesquisa(e.target.value)} />

            {produts.map((item) => {
                return (
                    <div key={item.id}>
                        <h4>{item.value}</h4>
                    </div>
                )
            })}
        </div>
    )
    
    
    
}