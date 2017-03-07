import { Mongo } from 'meteor/mongo';

export const Channels = new Mongo.Collection('channels');
export const Messages = new Mongo.Collection('messages');
