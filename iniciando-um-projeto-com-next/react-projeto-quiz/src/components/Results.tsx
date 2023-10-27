import { Question } from "@/types/questions"


type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({questions, answers}:Props) => {
    return (
    <div>
        {questions.map((item, key) => (
            <div key={key} className="mb-3" >
                <div className=" font-bold" > {key +1}. {item.question} </div>
                <div>
                    <span>({item.answer === answers[key] ? 'Acertou' : 'errrou!!'}) - </span>
                    {item.options[item.answer]}
                </div>
            </div>
        ))} 

    </div>
    )
}