// npm run dev, para start

import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";



const Page = () =>{

  return (
    <div>
      
     
     <StudentTable students={students}/>
  </div>
  )
  
}

export default Page;
