import React, { useState, useEffect } from "react";
import { words } from "../constants/words";
import { letters } from "../constants/letters";
import { stages } from "../constants/stages";
import Word from "./Word.jsx";
import Keyboard from "./Keyboard.jsx";
import HangmanImage from "./HangmanImage.jsx";
import "../styles/Hangman.css";

const Hangman = () => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.toUpperCase());
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
    setVictory(false);
  };

  const handleGuess = (letter) => {
    if (gameOver || guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      const newWrong = wrongGuesses + 1;
      setWrongGuesses(newWrong);
      if (newWrong === stages.length - 1) {
        setGameOver(true);
      }
    } else {
      const allGuessed = word.split("").every((l) => guessedLetters.includes(l) || l === letter);
      if (allGuessed) {
        setVictory(true);
        setGameOver(true);
      }
    }
  };

  return (
    <div className="hangman">
      <h1>Hangman Game</h1>
      <HangmanImage stage={wrongGuesses} />
      <Word word={word} guessedLetters={guessedLetters} gameOver={gameOver} />
      <Keyboard
        letters={letters}
        guessedLetters={guessedLetters}
        onGuess={handleGuess}
        gameOver={gameOver}
      />
      {gameOver && (
        <div className="result">
          {victory ? <h2>Ai castigat!</h2> : <h2>Ai pierdut!  Cuvantul era: {word}</h2>}
          <button onClick={startNewGame}>Joaca din nou</button>
        </div>
      )}
    </div>
  );
};

export default Hangman;