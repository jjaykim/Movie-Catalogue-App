import { GraphQLString, GraphQLNonNull } from 'graphql';
import { compare } from 'bcryptjs';

import { User } from '../../../db/models/user.model';

import { UserType } from './../../types/user';

interface Args {
  [key: string]: string;
}

export const loginUser = {
  type: UserType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent: object, args: Args): Promise<User | undefined> {
    try {
      // check the user is exist or not in the database
      const user = await User.findOne({ where: { email: args.email } });

      if (!user) {
        throw 'Unable to find User! Please try again';
      }

      // check the password is vaild or not
      const checkPassword = await compare(args.password, user.password);
      if (!checkPassword) {
        throw 'Password does not match!';
      }

      return user;
    } catch (err) {
      console.info(err);
    }
  },
};
