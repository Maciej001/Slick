import React from 'react';
import ChannelMessages from './ChannelMessages'
import ChannelMessageForm from './ChannelMessageForm'

const messages = [
  {
    text: 'Meteor in Flip Flops kicked off',
    author: 'Maciej',
  },
  {
    text: 'Back to coding!',
    author: 'Jaap',
  }
]

class Channel extends React.Component {
  render() {
    return (
      <div className='channel'>
        <ChannelMessages messages={ messages }/>
        <ChannelMessageForm />
      </div>
    )
  }
}

export default Channel
