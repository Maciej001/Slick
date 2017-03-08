import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router';


class ChannelList extends Component {
  render() {
    if ( !!this.props.data.loading )
      return <div>Loading....</div>

    const channels = this.props.data.getChannels;
    return (
      <div className='ChannelList'>
        <h1 className='header'>{`CHANNELS (${channels.length})`}</h1>
        {
          channels.map( channel => {
            const active = channel.name === this.props.channelName ? true : false;
            const linkClass = active ? "ChannelItem ChannelItemActive" : "ChannelItem";
            return (
              <Link className={linkClass} key={channel._id} to={`/channel/${channel.name}`}>
                {`#${channel.name}`}
              </Link>
            )
          })
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
