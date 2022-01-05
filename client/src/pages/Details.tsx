import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';

import { IMAGE_BASE_URL } from '../Config';
import { MovieType } from '../types/movie';
import { DetailsTable } from '../components/details_table/DetailsTable';

interface DetailsProps {
  className?: string;
}

const UnstyledDetails: FunctionComponent<DetailsProps> = ({ className }) => {
  const location = useLocation();
  const data = location.state as { movie: MovieType };
  const movie = data.movie;

  console.log(movie);
  console.log(movie.genre_ids);

  return (
    <Container className={className}>
      <Box maxHeight="30rem" overflow="hidden">
        <Box>Test</Box>
        <CardMedia
          image={`${IMAGE_BASE_URL}w1280${
            movie.backdrop_path ? movie.backdrop_path : movie.poster_path
          }`}
          component="img"
        />
      </Box>

      <Box mt={4} px={3}>
        <Box component="h2">Movie Information</Box>

        <Box
          className="detail_table"
          mt={3}
          minHeight="21rem"
          maxHeight="21rem"
          flexDirection="column"
          display="flex"
        >
          <DetailsTable
            data={[
              'Title',
              movie.original_title,
              'Release Date',
              movie.release_date,
              'Rating',
              movie.vote_average * 10,
            ]}
          />

          <DetailsTable genres={movie.genre_ids} />
          <DetailsTable overview={movie.overview} />
        </Box>
      </Box>
    </Container>
  );
};

export const Details = withTheme(styled(UnstyledDetails)`
  .detail_table {
    background-color: #424242;
  }
`);
