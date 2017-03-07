import React from 'react';

export const ChannelMessage = ({ message }) => (
  <div className='ChannelMessage'>
    <span className='message-author'>{message.handle}</span>
    <span className='message-text'>{message.text}</span>
  </div>
);
