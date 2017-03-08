import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ChannelMessage } from './ChannelMessage.jsx'

class ChannelMessages extends Component {

  render() {
    if ( this.props.data.loading )
      return <div>Loading...</div>

    const messages = this.props.data.getMessages;

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
  query messagesQuery($channel: String!) {
    getMessages(channel: $channel) {
      _id
      handle
      text
    }
  }
`

export default graphql(query, {
  options: ownProps => {
    return ({ variables: { channel: ownProps.channel} })}
})(ChannelMessages);
