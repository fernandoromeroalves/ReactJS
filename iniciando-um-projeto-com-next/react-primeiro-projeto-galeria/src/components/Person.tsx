const getWeekDay = (today: Date)=>{
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}
type Props={
    name: string;
    avatar?: string;
    roles: string[];
    adress?: string;
}
export const Person = ({name,avatar = 'https://i.stack.imgur.com/EYX0L.png',roles}:Props)=> {

    
    const data = {
        name: 'Elon Musk',
        avatar:'https://redebcn.com.br/wp-content/uploads/2023/05/Elon-Musk-revela-segredo-para-os-profissionais-do-futuro-1140x570.jpg',
        roles: ['CEO da tesla', 'CEO da spacex']     
    }
    
    return(
        <div className="p-3">  <br />
            <h1 style={{color: 'red', fontSize:'25px'}}>Nome: {data.name} - {getWeekDay()}</h1>
            <img src={data.avatar} alt={name}className="w-60" /> 
            <ul>
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
                <li>CEO da ...</li>
            </ul>
        </div>
    )
}