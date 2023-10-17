// npm run dev, para start
//"use client" para eventos de click

"use client"


const Page = () =>{
 
  const handleButtonClick =()=>{
    alert('funcionou 4')
  }

  return (
    <div className="container w-screen h-screen flex justify-center items-center">
      <button onClick={handleButtonClick}className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button>
     
     
  </div>
  )
  
}

export default Page;
