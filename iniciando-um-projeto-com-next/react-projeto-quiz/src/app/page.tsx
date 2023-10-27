// npm run dev, para start
//"use client" para eventos de click
"use client"

import { QuestionItem } from "@/components/QuestionItem";
import { questions } from "@/data/questions";
import { useState } from "react";



const Page = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResults, setShowResults] = useState(false);
  const title = 'Quiz de anime'

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

  return ( 
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
     <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
      <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
      <div className="p-5">
        <QuestionItem
        question={questions[currentQuestion]}
        count={currentQuestion + 1}
        onAnswer={handleAnswered}
        />
      </div>
      <div className="p-5 text-center border-t border-gray-300 ">
        {currentQuestion + 1} de {questions.length} pergunta{questions.length === 1 ? '' :'s'}
      </div>
     </div>

   </div>
  )
}


export default Page;
