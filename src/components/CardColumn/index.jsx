import { Box } from '@mui/material';

CardColumn.propTypes = {};

function CardColumn(props) {
  return (
    <Box sx={{ mt: 1, p: 1, fontSize: 14, bgcolor: 'primary.contrastText', borderRadius: 1 }}>
      Card column Card column Card column Card column Card column Card column
    </Box>
  );
}

export default CardColumn;
