import "./Welcome.css"

import { useContext } from "react"
import { QuizContext } from "../context/quiz"

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    

  return (
    <div>
        <h2>Welcome</h2>
        <p>Clique no botao abaixo para começar</p>
        <button onClick={()=> dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
    </div>
  )
}

export default Welcome
