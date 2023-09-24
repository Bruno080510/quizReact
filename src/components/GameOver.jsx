import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import './GameOver.css'

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src="https://raw.githubusercontent.com/matheusbattisti/quiz_react/3234b0fd070c26ef972b70116362ab8950928b71/src/img/welldone.svg" alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;