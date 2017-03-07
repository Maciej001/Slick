const resolvers = {
  Query: {
    getChannels(obj, args, context) {
      return context.Channels.getChannels()
    },
    getChannel(obj, args, context) {
      return context.Channels.getChannel(args.name)
    },
    getMessages(obj, args, context) {
      return context.Messages.getMessages(args.channel)
    }
  },
  Mutation: {
    addChannel(obj, args, context) {
      context.Channels.addChannel(args.name)
    },
    addMessage(obj, args, context) {
      context.Messages.addMessage({
        channel: args.channel,
        handle: args.handle,
        text: args.text
      })
    },

  },
};

export default resolvers;
