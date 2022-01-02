import React, {
  FunctionComponent,
  useState,
  useMemo,
  useEffect,
  ChangeEvent,
} from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { LoginInput } from '../types/login';

interface LoginProps {
  className?: string;
  onAdd: (user: LoginInput) => Promise<void>;
}

const UnstyledLogin: FunctionComponent<LoginProps> = ({ className }) => {
  const [loginInfo, setLoginInfo] = useState<LoginInput>({
    email: '',
    password: '',
  });
  const [vaildEmail, setVaildEmail] = useState('');

  const isEntered = useMemo(
    () => !!loginInfo.email && !!loginInfo.password && !vaildEmail,
    [loginInfo, vaildEmail]
  );

  useEffect(
    () =>
      setLoginInfo({
        email: '',
        password: '',
      }),
    []
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
          Log in
        </Box>

        <Box>
          <form noValidate autoComplete="off">
            <Box my={3} px={2}>
              <TextField
                required
                label="Email"
                type="email"
                aria-label="Email"
                color="secondary"
                fullWidth
                helperText={vaildEmail}
                value={loginInfo.email}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  const email = evt.target.value;

                  setVaildEmail(
                    !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
                      ? 'Please enter valid email'
                      : ''
                  );

                  setLoginInfo({
                    ...loginInfo,
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
                aria-label="Email"
                color="secondary"
                fullWidth
                value={loginInfo.password}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  setLoginInfo({
                    ...loginInfo,
                    password: evt.target.value,
                  });
                }}
              />
            </Box>

            <Box mt={2} display="flex" justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={
                  <ExitToAppIcon
                    className={!isEntered ? 'login-icon-disabled' : ''}
                  />
                }
                disabled={!isEntered}
                onClick={(evt) => {
                  evt.preventDefault();
                }}
              >
                <Box className="boldText">Login</Box>
              </Button>
            </Box>

            <Box my={3} display="flex" justifyContent="center">
              <Button
                variant="contained"
                component={RouteLink}
                to="/register"
                className="register-button"
                startIcon={<PersonAddIcon />}
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

export const Login = withTheme(styled(UnstyledLogin)`
  .login-form {
    background-color: #424242;
  }

  .Mui-required {
    color: white;
  }

  .MuiInput-input {
    color: wheat;
  }

  .register-button {
    background-color: #c2175b;
  }

  .MuiButton-startIcon {
    color: white;
  }

  .MuiFormHelperText-root {
    color: red;
  }

  .login-icon-disabled {
    color: #2b2b2b;
  }
`);
