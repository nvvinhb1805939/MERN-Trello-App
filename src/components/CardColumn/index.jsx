import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '@mui/material';

CardColumn.propTypes = {};

function CardColumn(props) {
  return (
    <ListItem sx={{ p: 1, fontSize: 14, bgcolor: 'primary.contrastText', borderRadius: 1 }}>
      Card column Card column Card column
    </ListItem>
  );
}

export default CardColumn;
