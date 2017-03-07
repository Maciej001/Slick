import React from 'react';
import ChannelListWithData from './ChannelListWithData.jsx'
import Channel from '../channel/Channel.jsx'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ChannelListWithData/>
        {this.props.children}
      </div>
    );
  }
}

export default App
