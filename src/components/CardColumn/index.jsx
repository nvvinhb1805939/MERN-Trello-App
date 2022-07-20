import { Box } from '@mui/material';
import PropTypes from 'prop-types';

CardColumn.propTypes = {
  data: PropTypes.object,
};

function CardColumn({ data = {} }) {
  return (
    <Box sx={{ mt: 1, p: 1, fontSize: 14, bgcolor: 'primary.contrastText', borderRadius: 1 }}>{data.cardTitle}</Box>
  );
}

export default CardColumn;
