import React from 'react';
import styled from 'styled-components';
import images from '../assets/images/';
import { CircleGrade } from './GradeLetter';

const StyledResultDetail = styled.div`
  margin: 60px auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 90%;
  height: 200px;
  img {
    height: 80px;
    margin-right: 50px;
  }
  .result-detail-text {
    width: 70%;
    .result-detail-title {
      display: flex;
      h3 {
        margin: 0px 10px 0px 0px;
      }
    }
    .soft {
      color: grey;
    }
    .bold {
      font-weight: 700;
    }
    a {
      text-decoration: none;
      color: cornflowerblue;
      font-weight: 700;
    }
  }
`;

class ResultDetail extends React.Component {
  render() {
    const { question, scoreObj } = this.props;
    const selectedChoices = question.choices.filter(choice => choice.isSelected);
    const text = selectedChoices.length
      ? selectedChoices[0].text
      : 'You did not select an answer for this section of the quiz.';
    const recommendation = selectedChoices.length
      ? selectedChoices[0].recommendation
      : 'Follow the link below to learn more about how EnterpriseGrade can help you improve your score!';
    return (
      <StyledResultDetail>
        <img src={images[question.text]} alt={question.text} />
        <div className="result-detail-text">
          <div className="result-detail-title">
            <h3>{question.text}</h3>
            <CircleGrade color={scoreObj.color} height="20">
              {scoreObj.letter}
            </CircleGrade>
          </div>
          <p className="soft">Your Answer:</p>
          <p className="soft">{text}</p>
          <p className="bold">{recommendation}</p>
          <a href="http://www.replicated.com">Learn More ></a>
        </div>
      </StyledResultDetail>
    );
  }
}

export default ResultDetail;
