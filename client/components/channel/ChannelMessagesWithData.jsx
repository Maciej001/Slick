import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ChannelMessage } from './ChannelMessage.jsx'

class ChannelMessages extends Component {
  render() {
    console.log(`this.props`, this.props);
    if ( this.props.data.loading )
      return <div>Loading...</div>

    const messages = this.props.data.getMessages;
    console.log('Loaded!!!')
    console.log(`messages`, messages);
    return (
      <div className='ChannelMessages'>
        {
          messages.map( message => (
            <ChannelMessage message={message} key={message._id}/>
          ))
        }
      </div>
    )
  }
};

const query = gql`
  query messagesQuery {
    getMessages(channel: "general") {
      _id
      handle
      text
    }
  }
`

export default graphql(query)(ChannelMessages);
