export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}
