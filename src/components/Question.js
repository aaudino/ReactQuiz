import React from "react";
import Options from "./Options";

export default function Question({ currentQuestion, answer, dispatch }) {
  console.log(currentQuestion);

  return (
    <div>
      <h4> {currentQuestion.question}</h4>
      <Options question={currentQuestion} answer={answer} dispatch={dispatch} />
    </div>
  );
}
