import React, {
  FunctionComponent,
  useState,
  useEffect,
  ChangeEvent,
} from 'react';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { AppBarStyles } from '../../../styles/appbar';

interface SearchBarProps {
  className?: string;
  onSearch: (input: string) => Promise<void>;
}

const UnstyledSearchBar: FunctionComponent<SearchBarProps> = ({
  className,
  onSearch,
}) => {
  const classes = AppBarStyles();
  const history = useHistory();
  const [input, setInput] = useState('');
  const [searchOn, setSearchOn] = useState(false);

  useEffect(() => {
    void onSearch(input);

    if (input && !searchOn) {
      setSearchOn(true);
      history.push({ pathname: '/search' });
    } else if (!input) {
      setSearchOn(false);
      history.goBack();
    }
  }, [input]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box className={classes.search}>
      <Box className={classes.searchIcon}>
        <SearchIcon />
      </Box>

      <InputBase
        value={input}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={(evt: ChangeEvent<HTMLInputElement>) => {
          setInput(evt.target.value);
        }}
      />
    </Box>
  );
};

export const SearchBar = withTheme(styled(UnstyledSearchBar)``);
