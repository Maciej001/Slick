import React from 'react';
import ChannelMessagesWithData from './ChannelMessagesWithData.jsx'
import ChannelMessageForm from './ChannelMessageForm.jsx'

class Channel extends React.Component {
  render() {
    console.log(`Channel props`, this.props);
    return (
      <div className='Channel'>
        <ChannelMessagesWithData channel={this.props.params.channelName}/>
        <ChannelMessageForm />
      </div>
    )
  }
}

export default Channel
