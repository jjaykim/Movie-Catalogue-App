import React, { FunctionComponent, useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/client';
import Box from '@material-ui/core/Box';

import { client } from './graphql/client';
import { createAppTheme } from './styles/them';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Navigation } from './components/navigation/Navigation';
import { Register } from './pages/Register';

const App: FunctionComponent = () => {
  const theme = createAppTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [statusLogin, setStatusLogin] = useState('');

  useEffect(() => setStatusLogin(''), []);

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogin = (status: string) => {
    setStatusLogin(status);
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          style={{
            position: 'relative',
            minHeight: '100vh',
          }}
        >
          <BrowserRouter>
            <Navigation
              statusLogin={statusLogin}
              drawerOpen={drawerOpen}
              onAdd={() => handleDrawer()}
            />

            <Switch>
              <>
                <Box pt="5rem" marginX={drawerOpen ? '280px' : '32px'}>
                  <Route exact path="/">
                    <Home drawerOpen={drawerOpen} />
                  </Route>

                  <Route path="/login">
                    <Login onAdd={(status: string) => handleLogin(status)} />
                  </Route>

                  <Route path="/register">
                    <Register />
                  </Route>
                </Box>
              </>
            </Switch>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
