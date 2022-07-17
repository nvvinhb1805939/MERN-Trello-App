import AddIcon from '@mui/icons-material/Add';
import { Box, Button, OutlinedInput, Stack } from '@mui/material';
import CardColumn from 'components/CardColumn';
import { Container, Draggable } from 'react-smooth-dnd';

BoardColumn.propTypes = {};

function BoardColumn(props) {
  return (
    <Box
      component='article'
      sx={{ width: 280, height: '100%', ml: 2, color: 'background.contrastText', overflowY: 'hidden' }}
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
        <Box
          sx={{
            py: 0,
            pl: 1,
            pr: 0.5,
            mr: '4px !important', // 0.5 * 8 = 4px

            maxHeight: '100%',
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

            '& > .smooth-dnd-container.vertical': {
              '& .card-drop-preview': {
                mt: 1,
                bgcolor: 'blur.secondary',
                border: '1px dashed',
                borderColor: 'blur.border',
                borderRadius: 1,
              },

              '& .card-ghost': {
                transition: 'transform 0.18s ease',
                transform: 'rotateZ(5deg)',
              },

              '& .card-ghost-drop': {
                transition: 'transform 0.18s ease-in-out',
                transform: 'rotateZ(0deg)',
              },
            },
          }}
        >
          <Container
            groupName='sub-col'
            dragClass='card-ghost'
            dropClass='card-ghost-drop'
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: 'card-drop-preview',
            }}
          >
            <Draggable>
              <CardColumn />
            </Draggable>
            <Draggable>
              <CardColumn />
            </Draggable>
            <Draggable>
              <CardColumn />
            </Draggable>
            <Draggable>
              <CardColumn />
            </Draggable>
            <Draggable>
              <CardColumn />
            </Draggable>
            <Draggable>
              <CardColumn />
            </Draggable>
            <Draggable>
              <CardColumn />
            </Draggable>
            <Draggable>
              <CardColumn />
            </Draggable>
            <Draggable>
              <CardColumn />
            </Draggable>
            <Draggable>
              <CardColumn />
            </Draggable>
            <Draggable>
              <CardColumn />
            </Draggable>
            <Draggable>
              <CardColumn />
            </Draggable>
          </Container>
        </Box>
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
