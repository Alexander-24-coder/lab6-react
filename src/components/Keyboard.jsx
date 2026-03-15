import React from "react";
import "../styles/Keyboard.css";
const Keyboard = ({ letters, guessedLetters, onGuess, gameOver }) => {
  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter) || gameOver}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;