import React from "react";
import QuizQuestionButton from "./QuizQuestionButton";

const QuizQuestion = (props) => {
  const handleClick = (buttonText) => {
    if (buttonText === props.quiz_question.answer) {
      props.showNextQuestionHandler();
    }
  };
  return (
    <div>
      <main>
        <section>
          <p>{props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {props.quiz_question.answer_options.map((answer_option, index) => {
              return (
                <QuizQuestionButton
                  key={index}
                  button_text={answer_option}
                  clickHandler={handleClick}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default QuizQuestion;
