import { gql } from '@apollo/client';

import { User } from '../types/user';

export interface RegisterData {
  registerUser: User;
}

export interface RegisterDataInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      firstName
      lastName
      email
    }
  }
`;
