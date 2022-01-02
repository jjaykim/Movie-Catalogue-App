import { GraphQLString, GraphQLNonNull } from 'graphql';
import { hash } from 'bcryptjs';

import { UserType } from '../../types/user';
import { User } from '../../../db/models/user.model';

interface Args {
  [key: string]: string;
}

export const createUser = {
  type: UserType,
  args: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent: object, args: Args): Promise<User | undefined> {
    try {
      // check all required fields enter or not
      if (
        !args.firstName.length ||
        !args.lastName.length ||
        !args.email.length ||
        !args.password.length
      ) {
        throw 'You have to enter all required fields';
      } else {
        args.email = args.email.trim();
        args.password = args.password.trim();
      }

      // check the eamil already registered or not
      const checkUser = await User.findOne({ where: { email: args.email } });

      if (checkUser) {
        throw 'You have already registerd';
      } else {
        const hashedPassword = await hash(args.password, 8);

        const user = await User.create({ ...args, password: hashedPassword });

        return user;
      }
    } catch (err) {
      console.info(err);
    }
  },
};
