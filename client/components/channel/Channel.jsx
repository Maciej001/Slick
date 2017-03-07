import React from 'react';
import ChannelMessagesWithData from './ChannelMessagesWithData.jsx'
import ChannelMessageForm from './ChannelMessageForm.jsx'

class Channel extends React.Component {
  render() {
    return (
      <div className='Channel'>
        <ChannelMessagesWithData />
        <ChannelMessageForm />
      </div>
    )
  }
}

export default Channel
