import React from 'react';
import styled from 'styled-components';

const StyledChoice = styled.div`
  margin-top: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 3px;
  background-color: ${props => (props.isSelected ? 'rgb(205,220,234)' : 'white')};
  .choice-letter {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props => (props.isSelected ? 'cornflowerblue' : 'rgb(205,220,234)')};
    color: ${props => (props.isSelected ? 'rgb(205,220,234)' : 'cornflowerblue')};
    font-weight: 600;
    line-height: 0;
  }
  span {
    padding: 0 10px;
    margin-left: 10px;
    text-align: left;
  }
  cursor: pointer;
`;

export default ({ isSelected, text, id, select }) => {
  const letter = id.slice(-1).toUpperCase();
  return (
    <StyledChoice isSelected={isSelected} onClick={select}>
      <div className="choice-letter">{letter}</div>
      <span>{text}</span>
    </StyledChoice>
  );
};
