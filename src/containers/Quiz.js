import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import QuestionPanel from '../components/QuestionPanel.jsx';

const StyledQuiz = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const UPDATE_ASSESSMENT = gql`
  mutation updateAssessment(
    $assessmentId: String
    $questionId: String!
    $selectedChoiceId: String!
  ) {
    updateAssessment(
      assessmentId: $assessmentId
      questionId: $questionId
      selectedChoiceId: $selectedChoiceId
    ) {
      id
      isCompleted
      questions {
        id
        text
        description
        question
        choices {
          id
          text
          recommendation
          isSelected
        }
      }
    }
  }
`;

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: 0,
    };
  }

  nextQuestion = () => {
    // final question? move to the results
    if (this.state.activeQuestion === this.props.questions.length - 1) {
      // if they've hit the end of the test
      return this.props.moveToResults();
    }
    const activeQuestion = this.state.activeQuestion + 1;
    this.setState({ activeQuestion });
  };

  render() {
    const q = this.props.questions[this.state.activeQuestion];
    return (
      <Mutation mutation={UPDATE_ASSESSMENT} onCompleted={() => console.log('mutation completed')}>
        {(updateAssessment, { loading, error }) => {
          return (
            <StyledQuiz>
              <div>
                <span>placeholder for progress bar</span>
                <hr />
              </div>
              <QuestionPanel
                questionId={q.id}
                text={q.text}
                description={q.description}
                question={q.question}
                choices={q.choices}
                nextQuestion={this.nextQuestion}
                selectChoice={selectedChoiceId => {
                  const { id: questionId } = this.props.questions[this.state.activeQuestion];
                  const { assessmentId } = this.props;
                  updateAssessment({ variables: { questionId, assessmentId, selectedChoiceId } });
                }}
              />
            </StyledQuiz>
          );
        }}
      </Mutation>
    );
  }
}

export default Quiz;
