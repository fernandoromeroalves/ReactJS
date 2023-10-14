// npm run dev, para start
import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";
import{Card} from "@/components/Card";
import { Circle } from "@/components/circle";



function Page(){
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>outro texto</h3>

      <Card phrase="Alguma coisa TOP" />
    </div>
  );
}

export default Page;
