import React from "react";
import { stages } from "../constants/stages";
import "../styles/HangmanImage.css";

const HangmanImage = ({ stage }) => {
  return (
    <div className="hangman-image">
      <img src={stages[stage]} alt={`Stage ${stage}`} />
    </div>
  );
};

export default HangmanImage;