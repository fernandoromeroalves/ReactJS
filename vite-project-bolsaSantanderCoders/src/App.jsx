import { NewComponent } from "./NewComponent"




function App() {
  

  return (
    <div>
      <h1>Olá, Mundo React</h1>
      <NewComponent/>
      <Button conteudo='Me clique'/>
      <Button conteudo='depois aqui'/>
      <Button conteudo='por ultimo aqui'/>
    </div>
  )
}



function Button (props){
  return(
    <button>{props.conteudo}</button>
  )
}

export default App
