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
        <img src="https://raw.githubusercontent.com/matheusbattisti/quiz_react/3234b0fd070c26ef972b70116362ab8950928b71/src/img/quiz.svg" alt="Inicio do quiz" />
    </div>
  )
}

export default Welcome