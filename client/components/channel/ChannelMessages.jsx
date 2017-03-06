import React from 'react';
import ChannelMessage from './ChannelMessage'

const ChannelMessages = ({ messages }) => (
  <div className='channel-messages'>
    {
      messages.map( message => (
        <ChannelMessage message={message} key={message.text}/>
      ))
    }
  </div>
);

export default ChannelMessages
