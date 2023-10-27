import { questions } from "@/data/questions";
import { Question } from "@/types/questions"
import { useState } from "react";

type Props = {
    question: Question,
    count: number,
    onAnswer: (answer: number) => void;
}

export const QuestionItem = ({question, count, onAnswer}: Props) => {

    const [selectedtAnswer, setSelectedtAnswer] = useState<number | null> (null)

    const checkQuestion = (key:number) => {
        if(selectedtAnswer === null ){
            setSelectedtAnswer(key);

            setTimeout(() => {
                onAnswer(key);
                setSelectedtAnswer(null)
            }, 2000);

            
        }
    }

    return (
        <div>
            <div className=" text-3xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) =>(
                    <div
                    key={key}
                    onClick={()=> checkQuestion(key)}
                    className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 border-blue-300 hover:opacity-60
                    
                    ${selectedtAnswer !== null && 'cursor-auto hover:opacity-100'}
                    ${selectedtAnswer !== null && selectedtAnswer === question.answer && selectedtAnswer === key && 'bg-green-200 border-green-500'}
                    ${selectedtAnswer !== null && selectedtAnswer !== question.answer && selectedtAnswer === key && 'bg-red-100 border-red-300'}
                    
                    `}
                    >{item}</div>
                ) )}
            </div>
        </div>
    )
}