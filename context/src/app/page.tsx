'use client'

const Title = ({label}:{label: string})=>{
  return (
    <h1 className="text-4xl font-bold my-4">{label}</h1>
  )
  
}

const SubTitle = ({label}:{label: string}) => {
  return(
    <h2>{label}</h2>
  )
  
}

const Header = ({title, subtitle}: {title:string; subtitle:string}) => {
  return (
    <header>
    <Title label={title}/>
    <SubTitle label={subtitle}/>
  </header>
  )
  
}
export default function Home() {
  const pageInfo = {
    title: 'titulo maroto',
    subtitle: 'algo muito legal'
  }

  return (
    <div className="container mx-auto">
      <Header title={pageInfo.title} subtitle={pageInfo.subtitle}/>
    </div>
  )
}
