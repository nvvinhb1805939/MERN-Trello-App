import React from 'react';
import PropTypes from 'prop-types';
import { Box, OutlinedInput, Button, Stack, List } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CardColumn from 'components/CardColumn';

BoardColumn.propTypes = {};

function BoardColumn(props) {
  return (
    <Box
      component='article'
      sx={{ flexBasis: 280, flexShrink: 0, height: '100%', color: 'background.contrastText', overflowY: 'hidden' }}
    >
      <Stack spacing={1} sx={{ maxHeight: '100%', bgcolor: 'background.main', borderRadius: 1 }}>
        <Box sx={{ p: 1, pb: 0 }}>
          <OutlinedInput
            value='Project Resources'
            size='small'
            fullWidth
            sx={{
              '& > input': {
                px: 1,
                py: 0.5,

                fontSize: 14,
                fontWeight: 600,
                color: 'background.contrastText',

                '&:focus': {
                  backgroundColor: 'primary.contrastText',

                  '& + fieldset': {
                    border: '2px solid',
                  },
                },
              },

              '& > fieldset': {
                border: 'none',
              },
            }}
          />
        </Box>
        {/* <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            maxHeight: '100%',

            py: 0,
            pl: 1,
            pr: 0.5,
            mr: '4px !important',
            overflowY: 'auto',

            '&::-webkit-scrollbar': {
              width: 8,

              '&-thumb': {
                backgroundColor: 'scrollbar.lightThumb',
                borderRadius: 2,
              },

              '&-track': {
                backgroundColor: 'scrollbar.lightTrack',
                borderRadius: 2,
              },
            },
          }}
        >
          <CardColumn />
          <CardColumn />
          <CardColumn />
          <CardColumn />
          <CardColumn />
          <CardColumn />
          <CardColumn />
          <CardColumn />
          <CardColumn />
          <CardColumn />
          <CardColumn />
          <CardColumn />
        </List> */}
        <Box sx={{ p: 1, pt: 0 }}>
          <Button
            fullWidth
            startIcon={<AddIcon />}
            size='small'
            sx={{
              justifyContent: 'flex-start',
              fontSize: 14,
              textTransform: 'unset',
              color: 'background.dark',
            }}
          >
            Add a card
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default BoardColumn;
