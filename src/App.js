import React, { Component } from 'react';
import QuestionPanel from './components/QuestionPanel';

const dummyQ = {
  id: 'ArCCjSAArQ',
  text: 'Product Assortment',
  description:
    'Maintaining different versions/packages of your product prevents small customers from being overwhelmed by features/options, while allowing enterprise customers to pay for the features they need.',
  question: 'Which best describes your product assortment?',
  choices: [
    {
      id: '1a',
      text: 'No packages or plans; each customer has access to the exact same functionality.',
      recommendation:
        'Your next step is to create plans that allow pricing assortment through usage.',
      isSelected: true,
    },
    {
      id: '1b',
      text: 'Plans are differentiated exclusively on the amount of usage, not by feature-gating.',
      recommendation:
        'Your next step is to provide 2 or more plans that that allow pricing assortment through feature-gating.',
      isSelected: false,
    },
    {
      id: '1c',
      text:
        'Two or more packages/options are defined by different features  (i.e., with and without enterprise features).',
      recommendation:
        'Your next step is to provide multiple plans that provide visibility into features that are not available (but could be with an upgrade), while keeping a less-complex experience for non-enterprise customers.',
      isSelected: false,
    },
    {
      id: '1d',
      text:
        'Additional premium features are exposed in the UI, to provide visibility into upgrade benefits and new features.',
      recommendation:
        'Perfect! Having different packages for different buying segments, specifically packages for enterprise customers, makes you one step closer to being EnterpriseReady!',
      isSelected: false,
    },
  ],
};

class App extends Component {
  render() {
    return (
      <QuestionPanel
        nextQuestion={() => {}}
        text={dummyQ.text}
        description={dummyQ.description}
        question={dummyQ.question}
        id={dummyQ.id}
        choices={dummyQ.choices}
        selectChoice={() => {}}
      />
    );
  }
}

export default App;
