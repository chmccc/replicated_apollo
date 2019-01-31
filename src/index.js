import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://assessment.staging.enterprisegrade.io/graphql' }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <main>
      <header>
        <span>placeholder for logo bar</span>
        <hr />
      </header>
      <App client={client} />
    </main>
  </ApolloProvider>,
  document.getElementById('root')
);
