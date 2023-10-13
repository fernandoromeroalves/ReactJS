const getWeekDay = (today: Date)=>{
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}
type Props={
    name: string;
    avatar: string;
    roles: string[];
    adress?: string;
}
export const Person = ({name,avatar,roles}:Props)=> {

    
    const data = {
        name: 'Elon Musk',
        avatar:'https://redebcn.com.br/wp-content/uploads/2023/05/Elon-Musk-revela-segredo-para-os-profissionais-do-futuro-1140x570.jpg',
        roles: ['CEO da tesla', 'CEO da spacex']     
    }
    
    return(
        <div className="p-3">  <br />
            <h1 style={{color: 'red', fontSize:'25px'}}>Nome: {name} - {getWeekDay()}</h1>
            <img src={avatar} alt={name}className="w-60" /> 
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
                <li>CEO da ...</li>
            </ul>
        </div>
    )
}