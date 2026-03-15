import React from "react";
import "../styles/Word.css";

const Word = ({ word, guessedLetters, gameOver }) => {
  return (
    <div className="word">
      {word.split("").map((letter, i) => {
        const isGuessed = guessedLetters.includes(letter);
        let style = {};
        if (gameOver) {
          style = isGuessed ? { color: "green" } : { color: "red" };
        }
        return (
          <span key={i} style={style} className="letter">
            {isGuessed || gameOver ? letter : "_"}
          </span>
        );
      })}
    </div>
  );
};

export default Word;