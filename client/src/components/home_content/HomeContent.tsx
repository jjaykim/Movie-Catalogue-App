import React, { FunctionComponent, useMemo } from 'react';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';

import { Poster } from '../poster/Poster';
import { MovieType } from '../../types/movie';

interface HomeContentProps {
  className?: string;
  movies: [];
}

const UnstyledHomeContent: FunctionComponent<HomeContentProps> = ({
  className,
  movies,
}) => {
  const newMovies: MovieType[] = useMemo(() => {
    const convert_movies = { ...movies };

    return orderBy(convert_movies, ['release_date'], ['desc']);
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
          <Box key={movie.id}>
            <Poster movie={movie} index={index} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const HomeContent = withTheme(styled(UnstyledHomeContent)``);
