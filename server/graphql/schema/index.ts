import { GraphQLObjectType, GraphQLSchema } from 'graphql';

// Impoert Queries
import { getUsers } from './queries/getUsers';
// Import Mutations
import { createUser } from './mutatons/createUser';
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
    createUser,
    loginUser,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
