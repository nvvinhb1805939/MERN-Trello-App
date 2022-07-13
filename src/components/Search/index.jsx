import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

Search.propTypes = {};

function Search(props) {
  return (
    <Stack direction='row' alignItems='center' sx={{ width: 300, p: 1, bgcolor: 'blur.main', borderRadius: 1 }}>
      <Box sx={{ pt: 0.5 }}>
        <SearchIcon sx={{ color: 'blur.contrastText' }} />
      </Box>
      <InputBase
        sx={{ ml: 0.5, flex: 1, color: 'blur.contrastText' }}
        placeholder='Search'
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Stack>
  );
}

export default Search;
