import React, { FunctionComponent, useEffect, useState } from 'react';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import axios from 'axios';

import { HomeContent } from '../components/home_content/HomeContent';
import { UPCOMING_URL, IMAGE_BASE_URL } from '../Config';
import e from 'express';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
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
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setLoading(true);

    axios
      .get(UPCOMING_URL + '1')
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (loading && !movies) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>{error}</Box>;
  }

  return (
    <>
      <Box className={drawerOpen ? classes.contentShift : classes.content}>
        <HomeContent movies={movies} />
      </Box>
    </>
  );
};

export const Home = withTheme(styled(UnstyleHome)``);
