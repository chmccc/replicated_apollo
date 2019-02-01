import React from 'react';
import styled from 'styled-components';
import images from '../assets/images/';
import { LetterGrade } from '../components/GradeLetter';

const StyledTinyScoreCard = styled.div`
  height: 70px;
  width: 140px;
  border: 1px solid ${props => (props.selected ? 'cornflowerblue' : 'lightgrey')};
  border-radius: 5px;
  padding: 10px;
  h5 {
    margin: 0 0;
  }
  .tiny-card-wrapper {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    img {
      height: 40px;
    }
  }
  :hover {
    border-color: cornflowerblue;
  }
  cursor: pointer;
`;

export default ({ text, scoreObj, select, selected }) => {
  return (
    <StyledTinyScoreCard onClick={select} selected={selected}>
      <h5>{text === 'Role-based Access Control' ? 'Role-Based AC' : text}</h5>
      <div className="tiny-card-wrapper">
        <img src={images[text]} alt="placeholder" />
        <LetterGrade color={scoreObj.color} height="40">
          {scoreObj.letter}
        </LetterGrade>
      </div>
    </StyledTinyScoreCard>
  );
};
