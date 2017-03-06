import React from 'react';

const ChannelMessage = ({ message }) => (
  <div className='channel-message'>
    <span className='message-author'>{message.author}</span>
    <span className='message-text'>{message.text}</span>
  </div>
);

export default ChannelMessage
