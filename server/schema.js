export default `
  type Channel {
    _id: ID!
    name: String!
    messages: [Message]
  }
  type Message {
    _id: ID!
    handle: String!
    text: String!
    channel: String!
  }

  type Query {
    getChannels : [Channel]
    getChannel(name: String!) : Channel
    getMessages(channel: String!) : [Message]
  }

  type Mutation {
    addMessage (
      channel: String!
      handle: String!
      text: String!
    ): Message
    addChannel (
      name: String!
    ): Channel


  }
  schema {
    query: Query
    mutation: Mutation
  }
`;
