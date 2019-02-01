import React from 'react';
import styled from 'styled-components';
import Radar from 'react-d3-radar';

const StyledD3Graph = styled.div``;

// helper function to build data prop required by D3 Radar component
const buildD3Data = (questions, scoreMap) => {
  return questions.reduce(
    (acc, question) => {
      // populate the variables object with keys and labels per Radar spec
      acc.variables.push({ key: question.id, label: question.text });
      // populate the 1st (and only) item in the sets array with values per Radar spec
      acc.sets[0].values[question.id] = scoreMap[question.id].num;
      return acc;
    },
    // note: for our purposes, sets only has one element
    { variables: [], sets: [{ key: 'results', label: 'Results', values: {} }] }
  );
};

export default ({ questions, scoreMap }) => {
  const data = buildD3Data(questions, scoreMap);
  return (
    <StyledD3Graph>
      <Radar
        width={200}
        height={200}
        padding={0}
        domainMax={4}
        highlighted={null}
        data={data}
        color="red"
      />
    </StyledD3Graph>
  );
};
