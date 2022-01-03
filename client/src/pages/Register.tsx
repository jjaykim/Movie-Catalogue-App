import React, {
  FunctionComponent,
  useState,
  useMemo,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { UserInput } from '../types/user';
import {
  REGISTER_USER,
  RegisterData,
  RegisterDataInput,
} from '../graphql/register.mutation';

interface RegisterProps {
  className?: string;
  onAdd: (user: UserInput) => Promise<void>;
}

const UnstyledRegister: FunctionComponent<RegisterProps> = ({
  className,
  onAdd,
}) => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState<UserInput>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [validEmail, setValidEmail] = useState('');
  const [validPassword, setValidPassword] = useState('');
  const [matchedPassword, setMatchedPassword] = useState('');
  const [registerUserMut] = useMutation<RegisterData, RegisterDataInput>(
    REGISTER_USER
  );

  const isEntered = useMemo(
    () =>
      !!userInfo.firstName &&
      !!userInfo.lastName &&
      !!userInfo.email &&
      !validEmail &&
      !!userInfo.password &&
      !!userInfo.passwordConfirm &&
      !matchedPassword &&
      !validPassword,
    [userInfo, validEmail, matchedPassword, validPassword]
  );

  useEffect(
    () =>
      setUserInfo({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }),
    []
  );

  const registerUser = useCallback(
    async (registerUserInfo: UserInput) => {
      try {
        const res = await registerUserMut({
          variables: {
            firstName: registerUserInfo.firstName,
            lastName: registerUserInfo.lastName,
            email: registerUserInfo.email,
            password: registerUserInfo.password,
          },
        });

        if (res.data?.registerUser) {
          history.replace({ pathname: '/login' });
        }
      } catch (e) {
        console.info(e);
      }
    },
    [registerUserMut] //eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <Box
      className={className}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="40vh"
    >
      <Box className="login-form" minWidth="25rem" minHeight="24vh">
        <Box
          component="h2"
          display="flex"
          justifyContent="center"
          fontSize={25}
        >
          Register
        </Box>

        <Box>
          <form noValidate autoComplete="off">
            <Box my={3} px={2} display="flex" justifyContent="space-between">
              <Box>
                <TextField
                  required
                  label="First Name"
                  type="text"
                  color="secondary"
                  fullWidth
                  value={userInfo.firstName}
                  onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                    setUserInfo({
                      ...userInfo,
                      firstName: evt.target.value,
                    });
                  }}
                />
              </Box>

              <Box>
                <TextField
                  required
                  label="Last Name"
                  type="text"
                  color="secondary"
                  fullWidth
                  value={userInfo.lastName}
                  onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                    setUserInfo({
                      ...userInfo,
                      lastName: evt.target.value,
                    });
                  }}
                />
              </Box>
            </Box>

            <Box my={3} px={2}>
              <TextField
                required
                label="Email"
                type="email"
                color="secondary"
                helperText={validEmail}
                fullWidth
                value={userInfo.email}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  const email = evt.target.value;

                  setValidEmail(
                    !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
                      ? 'Please enter valid email'
                      : ''
                  );

                  setUserInfo({
                    ...userInfo,
                    email: email.trim(),
                  });
                }}
              />
            </Box>

            <Box py={2} px={2}>
              <TextField
                required
                label="Password"
                type="password"
                color="secondary"
                fullWidth
                value={userInfo.password}
                helperText={validPassword}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  const password = evt.target.value;

                  setValidPassword(
                    password.length < 6
                      ? 'Password must be at least 6 or more characters'
                      : ''
                  );

                  setUserInfo({
                    ...userInfo,
                    password: password.trim(),
                  });
                }}
              />
            </Box>
            <Box py={2} px={2}>
              <TextField
                required
                label="Confirm Password"
                type="password"
                color="secondary"
                fullWidth
                helperText={matchedPassword}
                value={userInfo.passwordConfirm}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  const confirmPassword = evt.target.value;

                  setMatchedPassword(
                    userInfo.password !== confirmPassword
                      ? 'passwords not matching'
                      : ''
                  );

                  setUserInfo({
                    ...userInfo,
                    passwordConfirm: evt.target.value.trim(),
                  });
                }}
              />
            </Box>

            <Box my={3} display="flex" justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isEntered}
                onClick={(evt) => {
                  evt.preventDefault();
                  registerUser(userInfo);
                }}
              >
                <Box className="boldText" color="white">
                  Register
                </Box>
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export const Register = withTheme(styled(UnstyledRegister)`
  .login-form {
    background-color: #424242;
  }

  .Mui-required {
    color: white;
  }

  .MuiInput-input {
    color: wheat;
  }

  .MuiFormHelperText-root {
    color: red;
  }
`);
