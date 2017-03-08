import React from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import App from './root/App.jsx'
import Channel from './channel/Channel.jsx'

export default <Router history={browserHistory}>
  <Route component={App}>
    <Redirect from="/" to="channel/general" />
    <Route path="/channel/:channelName" component={Channel} />
  </Route>
</Router>;
