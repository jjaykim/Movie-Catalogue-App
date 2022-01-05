import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import map from 'lodash/map';
import find from 'lodash/map';
import Chip from '@material-ui/core/Chip';

import { MOVIE_GENRES } from '../../types/genre';

interface DetailsTableProps {
  className?: string;
  data: string[];
  genres?: number[];
  overview?: string;
}

const UnstyledDetailsTable: FunctionComponent<DetailsTableProps> = ({
  className,
  data,
  genres,
  overview,
}) => {
  return (
    <Box
      className={className}
      display="flex"
      flexDirection="row"
      minHeight="7rem"
      alignItems="center"
    >
      {genres ? (
        <>
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="boldText"
          >
            Genre
          </Box>
          <Box flex={1} display="flex" alignItems="center">
            {map(genres, (id, index) => {
              if (find(MOVIE_GENRES, (genre) => genre.id === id))
                return (
                  <Box mr={1.5}>
                    <Chip label={MOVIE_GENRES[index].name} />
                  </Box>
                );
            })}
          </Box>
        </>
      ) : (
        map(data, (text, index) => {
          return (
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              key={index}
              justifyContent={index % 2 === 0 ? 'center' : ''}
              className={index % 2 === 0 ? 'boldText' : ''}
            >
              {text}
            </Box>
          );
        })
      )}

      {overview && (
        <>
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="boldText"
          >
            Overview
          </Box>
          <Box flex={1} display="flex" alignItems="center">
            {overview}
          </Box>
        </>
      )}
    </Box>
  );
};

export const DetailsTable = withTheme(styled(UnstyledDetailsTable)``);
