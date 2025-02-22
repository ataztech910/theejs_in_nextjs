// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Votes, Comments, UserCreatedModel } = initSchema(schema);

export {
  Votes,
  Comments,
  UserCreatedModel
};