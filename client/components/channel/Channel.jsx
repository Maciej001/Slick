import React from 'react';
import ChannelMessagesWithData from './ChannelMessagesWithData.jsx'
import ChannelMessageForm from './ChannelMessageForm.jsx'

class Channel extends React.Component {
  render() {
    const channel = this.props.params.channelName;
    
    return (
      <div className='Channel'>
        <ChannelMessagesWithData channel={channel}/>
        <ChannelMessageForm />
      </div>
    )
  }
}

export default Channel
