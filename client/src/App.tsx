import React, { FunctionComponent, useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import { createAppTheme } from './styles/them';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Navigation } from './components/navigation/Navigation';

const App: FunctionComponent = () => {
  const theme = createAppTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        style={{
          position: 'relative',
          minHeight: '100vh',
        }}
      >
        <BrowserRouter>
          <Navigation drawerOpen={drawerOpen} onAdd={() => handleDrawer()} />

          <Switch>
            <>
              <Box pt="5rem" marginLeft={drawerOpen ? '250px' : '30px'}>
                <Route exact path="/">
                  <Home drawerOpen={drawerOpen} />
                </Route>

                <Route path="/login">
                  <Login />
                </Route>
              </Box>
            </>
          </Switch>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
};

export default App;
