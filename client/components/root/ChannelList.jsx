import React from 'react';

const channels = [
  { name: "general" },
  { name: "miff" },
]

class ChannelList extends React.Component {
  render() {
    return (
      <div className='channel-list'>
        <h1>CHANNELS</h1>
        {
          channels.map( channel => (
            <span className='channel-item' key={channel.name}>{`#${channel.name}`}</span>
          ))
        }
      </div>
    )
  }
}

export default ChannelList
