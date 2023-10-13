// npm run dev, para start
import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";



function Page(){
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>outro texto</h3>

      <Person 
      name='Elon Musk'
      avatar='https://redebcn.com.br/wp-content/uploads/2023/05/Elon-Musk-revela-segredo-para-os-profissionais-do-futuro-1140x570.jpg'
      roles={['CEO da tesla','CEO da spacex']}

      />
      <Person 
      name='FERNANDO'
      avatar='https://blog.eseg.edu.br/wp-content/uploads/2020/06/original-6f96ee168ab0b419a98fea4f2dfc31fc-780x450.jpg'
      roles={['PROGRAMADOR da tesla','PROGRAMADOR da spacex']}

      />
      <Person
      name="Pedro"
      avatar="https://setcesp.org.br/wp-content/uploads/2019/08/motorista-1080x675.jpg"
      roles={['motorista profissional','motorista carreteiro']}
      />
    </div>
  );
}

export default Page;
