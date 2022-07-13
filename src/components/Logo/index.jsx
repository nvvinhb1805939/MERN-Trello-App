import React from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/imgs/logo.gif';
import { Box } from '@mui/material';

Logo.propTypes = {};

function Logo(props) {
  return (
    <Box sx={{ width: 80, height: 16 }}>
      <img src={logo} alt='logo' />
    </Box>
  );
}

export default Logo;
