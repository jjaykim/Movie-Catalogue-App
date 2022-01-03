import React, { FunctionComponent, useMemo } from 'react';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import map from 'lodash/map';

import { Poster } from '../poster/Poster';

interface HomeContentProps {
  className?: string;
  movies: [];
}

const UnstyledHomeContent: FunctionComponent<HomeContentProps> = ({
  className,
  movies,
}) => {
  const newMovies = useMemo(() => {
    return { ...movies };
  }, [movies]);

  if (!movies) {
    return <Box>Movies coming...</Box>;
  }

  return (
    <Box className={className}>
      <Box>
        <Box component="h1">New Releases</Box>

        <Box ml={1} className="boldText" fontSize="0.9rem">
          The following is a list of new releases.
        </Box>

        <Box ml={1} mt={1} className="boldText" fontSize="0.8rem">
          ☑️ Click the post for more information.
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" flexWrap="wrap" mx={3} mt={-3}>
        {map(newMovies, (movie, index) => (
          <Poster movie={movie} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export const HomeContent = withTheme(styled(UnstyledHomeContent)`
  .card-action {
    cursor: pointer;
    padding: 2px;
    border-radius: 16px;
  }

  .card {
    min-width: 19rem;
    max-width: 19rem;
    min-height: 41rem;
    max-height: 41rem;
    background-color: #424242;
    border-radius: 16px;
  }

  .card-content {
    color: white;
  }
`);
