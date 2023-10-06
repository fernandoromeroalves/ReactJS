// npm run dev, para start
import {Circle, Square} from "@/components/geo";

function Page(){
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>outro texto</h3>

      <Square/>
      <Circle/>
    </div>
  );
}

export default Page;
