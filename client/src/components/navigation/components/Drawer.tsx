import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import Box from '@material-ui/core/Box';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      marginTop: '4rem',
      backgroundColor: '#424242',
      color: 'white',
    },
  })
);

interface DrawerProps {
  className?: string;
  drawerOpen: boolean;
}

const UnstyledSideDrawer: FunctionComponent<DrawerProps> = ({
  className,
  drawerOpen,
}) => {
  const classes = useStyles();

  return (
    <Box className={className}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />

        <List>
          <ListItem button key="New Releases">
            <ListItemIcon>
              <FiberNewIcon />
            </ListItemIcon>
            <ListItemText primary="New Releases" />
          </ListItem>

          <ListItem button key="Favorite">
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorite" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export const SideDrawer = withTheme(styled(UnstyledSideDrawer)`
  .MuiListItemIcon-root {
    color: white;
    padding-left: 0.5rem;
  }
`);
