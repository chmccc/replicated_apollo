import React from 'react';
import styled from 'styled-components';
import Choice from './Choice.jsx';

const StyledQuestionPanel = styled.div`
  margin: 30px auto;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 50%;
  min-width: 350px;
  max-width: 550px;
  margin: 0 auto;
  padding: 40px;
  .question-flavor {
    margin: 30px auto;
    width: 90%;
  }
  .choices-list {
    margin: 15px 0;
  }
  button {
    border: none;
    color: red;
    font-weight: 600;
    padding: 15px;
    cursor: pointer;
    outline: none;
    font-size: 1.2em;
  }
`;

export default ({ text, description, question, choices, nextQuestion, selectChoice }) => {
  return (
    <StyledQuestionPanel>
      <h3>{text}</h3>
      <div className="question-flavor">
        <span>
          {description} {question}
        </span>
      </div>
      <div className="choices-list">
        {choices.map(({ id, text, isSelected }) => (
          <Choice
            key={`choice${id}`}
            id={id}
            text={text}
            isSelected={isSelected}
            select={() => {
              selectChoice(id);
            }}
          />
        ))}
      </div>
      <button
        onClick={e => {
          // make sure they've chosen something
          if (choices.filter(choice => choice.isSelected).length !== 1) {
            return window.alert('Please make a selection before proceeding.');
          }
          return nextQuestion();
        }}>
        Next >
      </button>
    </StyledQuestionPanel>
  );
};
