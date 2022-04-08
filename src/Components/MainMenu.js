import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../styles.css";

export default function MainMenu() {
  const { gameState, setGameState, userName, setUserName } = useContext(QuizContext);
  return (
    <div className="Menu">
    <label> Enter Your Name: </label>  
    <input
      type="text"
      placeholder="Ex. John Smith"
      onChange={(event) => {
        setUserName(event.target.value);
      }}
    />
    <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
