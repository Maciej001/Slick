import React from 'react';
import ChannelList from './ChannelList'
import Channel from '../channel/Channel'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ChannelList />
        <Channel />
      </div>
    );
  }
}

export default App
