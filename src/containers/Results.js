import React from 'react';
import styled from 'styled-components';
import Overview from '../components/Overview.jsx';
import AllScoresBox from '../components/AllScoresBox.jsx';
import ResultDetail from '../components/ResultDetail';

const StyledResults = styled.div`
  width: 1000px;
  margin: 0 auto;
  #overview-wrapper {
    height: 300px;
  }
`;

const numberMap = { a: 1, b: 2, c: 3, d: 4, f: 0 };
const gradeMap = ['F', 'D', 'C', 'B', 'A'];
const colorMap = ['maroon', 'red', 'orange', 'cornflowerblue', 'green'];

const buildScoreMap = questions => {
  // helper object for scores, keyed by question id
  // format example: { "xG5h6hK": { num: 2, letter: "B"}, ... }
  const scoreMap = questions.reduce((acc, question) => {
    let choiceLetter;
    const selectedChoices = question.choices.filter(choice => choice.isSelected);
    if (!selectedChoices.length) acc[question.id] = { num: 0, letter: 'F', color: 'maroon' };
    else {
      choiceLetter = selectedChoices[0].id.slice(-1);
      const numScore = numberMap[choiceLetter];
      acc[question.id] = { num: numScore, letter: gradeMap[numScore], color: colorMap[numScore] };
    }
    return acc;
  }, {});

  // tack on a similar overall score key by getting the average of all scores
  const avgScore = Math.round(
    Object.values(scoreMap).reduce((sum, question) => {
      sum += question.num;
      return sum;
    }, 0) / questions.length
  );
  scoreMap.overall = { num: avgScore, letter: gradeMap[avgScore], color: colorMap[avgScore] };

  return scoreMap;
};

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuestion: 0,
    };
    this.detail = React.createRef();
  }

  selectQuestion = async selectedQuestion => {
    await this.setState({ selectedQuestion });
    this.scrollToDetail();
  };

  scrollToDetail = () => {
    this.detail.scrollIntoView({ block: 'end', behavior: 'smooth' });
  };

  render() {
    const {
      props: { questions },
      state: { selectedQuestion },
      selectQuestion,
    } = this;

    const scoreMap = buildScoreMap(questions);
    return (
      <StyledResults>
        <Overview questions={questions} scoreMap={scoreMap} />
        <AllScoresBox
          questions={questions}
          scoreMap={scoreMap}
          selectQuestion={selectQuestion}
          selectedQuestion={selectedQuestion}
        />
        <div id="detail-wrapper" ref={el => (this.detail = el)}>
          <ResultDetail
            question={questions[selectedQuestion]}
            scoreObj={scoreMap[questions[selectedQuestion].id]}
          />
        </div>
      </StyledResults>
    );
  }
}

export default Results;
