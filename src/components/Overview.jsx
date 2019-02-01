import React from 'react';
import styled from 'styled-components';
import { CircleGrade } from '../components/GradeLetter';
import D3Graph from './D3Graph';

const StyledOverview = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 300px;
  #main-grade {
    width: 45%;
    #main-grade-header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      h1 {
        width: 75%;
      }
    }
    #abstract {
      color: grey;
      font-size: 1.1em;
      font-weight: 500;
    }
    #summary {
      font-weight: 700;
    }
  }
`;

export default ({ questions, scoreMap }) => {
  return (
    <StyledOverview>
      <D3Graph questions={questions} scoreMap={scoreMap} />
      <div id="main-grade">
        <div id="main-grade-header">
          <h1>Here is your EnterpriseGrade</h1>
          <CircleGrade color={scoreMap.overall.color} height="70">
            {scoreMap.overall.letter}
          </CircleGrade>
        </div>
        <p id="abstract">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
        </p>
        <p id="summary">
          This is some text with a better summary about what your answers mean and how you can be
          more EnterpriseReady. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
    </StyledOverview>
  );
};
