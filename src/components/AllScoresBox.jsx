import React from 'react';
import styled from 'styled-components';
import TinyScoreCard from './TinyScoreCard';

const Styled = styled.div`
  margin: 0 auto;
  width: 70%;
  h2,
  p {
    text-align: center;
    padding: 0 10px;
  }
  p {
    color: grey;
    font-size: 1.1em;
    font-weight: 500;
  }
  #tiny-card-grid {
    margin-top: 50px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto;
    grid-gap: 25px;
    justify-items: center;
    align-items: center;
  }
  cursor: pointer;
`;

export default ({ questions, scoreMap, selectQuestion, selectedQuestion }) => {
  return (
    <Styled>
      <h2>Let's take a closer look at your scores</h2>
      <p>
        Select a category below to get a more detailed view of your scores, as well as next steps on
        becoming more EnterpriseReady.
      </p>
      <div id="tiny-card-grid">
        {questions.map((question, i) => (
          <TinyScoreCard
            key={`tinyCard${question.id}`}
            text={question.text}
            scoreObj={scoreMap[question.id]}
            select={() => selectQuestion(i)}
            selected={selectedQuestion === i}
          />
        ))}
      </div>
    </Styled>
  );
};
