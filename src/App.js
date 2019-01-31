import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const StyledApp = styled.div`
  width: 100%;
  margin: 0;
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
    };
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

  componentDidMount() {
    this.getAssessmentId();
  }

  render() {
    return this.state.assessmentId ? (
      <Query query={GET_ASSESSMENT} variables={{ id: this.state.assessmentId }}>
        {({ loading, error, data: { assessment } }) => {
          if (loading) return null;
          const { questions } = assessment;
          console.log('got questions? ', questions);
          return <StyledApp />;
        }}
      </Query>
    ) : (
      <div className="loading">Loading, please wait...</div>
    );
  }
}

export default App;
