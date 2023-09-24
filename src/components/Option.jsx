import React from 'react'
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import './Option.css'
function Option({option, selectedOption, answer}) {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='option' onClick={()=> selectedOption()}>
     <p>{option}</p> 
    </div>
  )
}

export default Option