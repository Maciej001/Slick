import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import schema from './schema';
import resolvers from './resolvers';

import ChannelsRepository from './connectors/ChannelsRepository';
import MessagesRepository from './connectors/MessagesRepository';

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

createApolloServer({
  schema: executableSchema,
  context: {
    Channels: new ChannelsRepository(),
    Messages: new MessagesRepository(),
  }
});
