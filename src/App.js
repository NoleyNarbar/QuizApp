import "./styles.css";
import React, { useState } from "react";
import MainMenu from "./Components/MainMenu";
import EndScreen from "./Components/EndScreen";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Helpers/Context";

export default function App() {
  const [gameState, setGameState] = useState("MainMenu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endscreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}
