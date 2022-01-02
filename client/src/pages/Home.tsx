import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      // marginLeft: 30,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      // marginLeft: 250,
    },
  })
);

interface HomeProps {
  className?: string;
  drawerOpen: boolean;
}

const UnstyleHome: FunctionComponent<HomeProps> = ({
  className,
  drawerOpen,
}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={drawerOpen ? classes.contentShift : classes.content}>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis qui
          magni minus repudiandae. Nihil reprehenderit totam facilis, explicabo
          officia quidem quasi eos reiciendis autem, maiores perferendis atque
          ut commodi.
        </Box>
      </Box>
    </>
  );
};

export const Home = withTheme(styled(UnstyleHome)``);
