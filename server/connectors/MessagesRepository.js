import { Messages } from '../collections'

const fakeMessages = [
  {
    handle: 'Maciej',
    text: 'Meteor in Flip Flops kicked off',
    channel: 'general',
  },
  {
    handle: 'Jaap',
    text: 'Back to coding!',
    channel: 'general',
  },
  {
    handle: 'Maciej',
    text: 'Meteor in Flip Flops kicked off32',
    channel: 'miff',
  },
];

const messages = Messages.find().fetch();

if (messages.length === 0 ) {
  fakeMessages.forEach( message => {
    const { handle, text, channel } = message;
    Messages.insert({
      handle,
      text,
      channel,
    })
  })
}

class MessagesRepository {
  getMessages(channel) {
    return Messages.find({ channel }).fetch();
  }
  addMessage({channel, handle, text}) {
    return Messages.insert({ channel, handle, text });
  }
}

export default MessagesRepository;
