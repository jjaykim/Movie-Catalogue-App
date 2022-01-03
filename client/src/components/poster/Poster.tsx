import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { motion } from 'framer-motion';

import { MovieType } from '../../types/movie';
import { IMAGE_BASE_URL } from '../../Config';

interface PosterProps {
  className?: string;
  movie: MovieType;
  index: number;
}

const UnstyledPoster: FunctionComponent<PosterProps> = ({
  className,
  movie,
  index,
}) => {
  const history = useHistory();

  return (
    <Box className={className} mx={2} mt={5} key={index}>
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 20 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        className="show-card"
      >
        <CardActionArea
          className="card-action"
          onClick={() => {
            history.push({ pathname: '/login' });
          }}
        >
          <Card className="card">
            <Box
              minHeight="6rem"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignContent="flex-start"
              className="boldText"
              px={2}
            >
              <Box
                color="white"
                fontSize={movie.original_title.length > 25 ? 15 : 20}
              >
                {movie.original_title}
              </Box>

              <Box color="#C6C6C6" mt={0.5}>
                New Release
              </Box>
            </Box>

            <CardMedia
              image={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
              component="img"
            />

            <CardContent className="card-content">
              <Box display="flex" flexDirection="row" mt={1}>
                <Box className="boldText">Ratings:</Box>
                <Box ml={0.5}>{movie.vote_average * 10}%</Box>
              </Box>

              <Box display="flex" flexDirection="row" mt={0.8}>
                <Box className="boldText">Release Date:</Box>
                <Box ml={0.5}>{movie.release_date}</Box>
              </Box>

              <Box display="flex" flexDirection="column" mt={0.8}>
                <Box className="boldText">Overview:</Box>
                <Box ml={1} mt={0.5} fontSize={13} lineHeight={1.4}>
                  {movie.overview.length > 240
                    ? movie.overview.slice(0, 240) + '...'
                    : movie.overview}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </CardActionArea>
      </motion.div>
    </Box>
  );
};

export const Poster = withTheme(styled(UnstyledPoster)`
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
