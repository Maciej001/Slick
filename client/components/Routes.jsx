import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './root/App.jsx'
import Channel from './channel/Channel.jsx'

export default <Router history={browserHistory}>
  <Route component={App}>
    <Route path="/channel/:channelName" component={Channel} />
  </Route>
</Router>;
