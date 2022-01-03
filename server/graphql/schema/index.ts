import { GraphQLObjectType, GraphQLSchema } from 'graphql';

// Impoert Queries
import { getUsers } from './queries/getUsers';
// Import Mutations
import { registerUser } from './mutatons/registerUser';
import { loginUser } from './mutatons/loginUser';

// Queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getUsers,
  },
});

// Mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    registerUser,
    loginUser,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
