import React, { FunctionComponent, useEffect, useState } from 'react';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import map from 'lodash/map';

import { SEARCH_URL } from '../Config';
import { Poster } from '../components/poster/Poster';

interface SearchProps {
  className?: string;
  searchInput: string;
}

const UnstyledSearch: FunctionComponent<SearchProps> = ({
  className,
  searchInput,
}) => {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    axios
      .get(`${SEARCH_URL}${searchInput}`)
      .then((res) => {
        setSearchedMovie({ ...res.data.results });
      })
      .catch((err) => {
        setError(err);
      });
  }, [searchInput]);

  if (error) {
    return <Box>{error}</Box>;
  }

  return (
    <Box className={className}>
      <Box display="flex" flexDirection="row" alignItems="baseline">
        <Box fontSize={20}>Searching for</Box>

        <Box ml={2} className="boldText" fontSize={40} borderBottom="2px solid">
          {searchInput}
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" flexWrap="wrap" mx={3} mt={-3}>
        {map(searchedMovie, (movie, index) => (
          <Poster movie={movie} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export const Search = withTheme(styled(UnstyledSearch)``);
