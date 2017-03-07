import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ChannelList extends React.Component {
  render() {
    if ( !!this.props.data.loading )
      return <div>Loading....</div>

    const channels = this.props.data.getChannels;

    return (
      <div className='ChannelList'>
        <h1 className='header'>{`CHANNELS (${channels.length})`}</h1>
        {
          channels.map( channel => (
            <span className='ChannelItem' key={channel._id}>{`#${channel.name}`}</span>
          ))
        }
      </div>
    )
  }
}

const query = gql`
  query channelsQuery {
    getChannels {
      _id
      name
    }
  }
`

export default graphql(query)(ChannelList);
