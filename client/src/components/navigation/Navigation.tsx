import React, { FunctionComponent } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { SideDrawer } from './components/Drawer';
import { AppBarStyles } from '../../styles/appbar';

interface NavigationProps {
  className?: string;
  drawerOpen: boolean;
  onAdd: () => Promise<void>;
}

const UnstyledNavigation: FunctionComponent<NavigationProps> = ({
  className,
  drawerOpen,
  onAdd,
}) => {
  const classes = AppBarStyles();

  return (
    <Box className={className}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={() => void onAdd()}
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <RouteLink to="/" className="routerLink">
            <Typography className="boldText" variant="h6">
              MEOBOLLAE
            </Typography>
          </RouteLink>

          <Box className={classes.grow} />

          <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon />
            </Box>

            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </Box>

          <Button className={classes.button} component={RouteLink} to="/login">
            <Box pl="0.4rem" fontWeight="bold">
              Login
            </Box>
          </Button>

          {/* <div className={classes.sectionDesktop}>
            <IconButton aria-haspopup="true" color="inherit">
              <AccountCircle />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>

      <SideDrawer drawerOpen={drawerOpen} />
    </Box>
  );
};

export const Navigation = withTheme(styled(UnstyledNavigation)``);
