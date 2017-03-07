import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/root/App.jsx'

const apolloClient = new ApolloClient();

Meteor.startup(() => {
  render(
    <ApolloProvider client={apolloClient}>
      <App/>
    </ApolloProvider>,
    document.getElementById('root'),
  );
});
