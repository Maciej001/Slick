import { Channels } from '../collections'

let channels = Channels.find().fetch();

const fakeChannels = [
  {
    name: 'miff'
  },
  {
    name: 'general'
  }
];

if (channels.length === 0) {
  fakeChannels.forEach( channel => {
    Channels.insert({ name: channel.name })
  })
}

class ChannelsRepository {
  getChannels() {
    return Channels.find().fetch();
  }
  getChannel(name) {
    console.log(name)
    return Channels.findOne({name})
  }
  addChannel(name) {
    return Channels.insert({ name });
  }
}

export default ChannelsRepository
