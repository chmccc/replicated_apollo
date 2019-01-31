import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Quiz from './containers/Quiz';
import Results from './containers/Results';

const StyledApp = styled.div`
  width: 100%;
  margin: 0;
  #loading {
    width: 100%;
    text-align: center;
  }
`;

const GET_ASSESSMENT_ID = gql`
  mutation prepareAssessment($templateId: String!) {
    prepareAssessment(templateId: $templateId)
  }
`;

const GET_ASSESSMENT = gql`
  query getAssessment($id: String!) {
    assessment(id: $id) {
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assessmentId: null,
      quizComplete: false,
    };
  }

  componentDidMount() {
    this.getAssessmentId();
  }

  getAssessmentId = async () => {
    const {
      data: { prepareAssessment: assessmentId },
    } = await this.props.client.mutate({
      variables: { templateId: 'colin' },
      mutation: GET_ASSESSMENT_ID,
    });

    this.setState({ assessmentId });
  };

  moveToResults = () => {
    this.setState({ quizComplete: true });
  };

  render() {
    return this.state.assessmentId ? (
      <Query query={GET_ASSESSMENT} variables={{ id: this.state.assessmentId }}>
        {({ loading, error, data: { assessment } }) => {
          console.log('called rerender on query render prop');
          if (loading) return null;
          const { questions } = assessment;
          return (
            <StyledApp>
              {this.state.quizComplete ? (
                <Results questions={questions} />
              ) : (
                <Quiz
                  questions={questions}
                  assessmentId={this.state.assessmentId}
                  moveToResults={this.moveToResults}
                />
              )}
            </StyledApp>
          );
        }}
      </Query>
    ) : (
      <div id="loading">Loading, please wait...</div>
    );
  }
}

export default App;
