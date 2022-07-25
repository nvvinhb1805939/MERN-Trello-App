import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Collapse, OutlinedInput, Stack, Typography } from '@mui/material';
import CardColumn from 'components/CardColumn';
import InputTitle from 'components/form-controls/InputTitle';
import { COLUMN_WIDTH } from 'constant';
import PropTypes from 'prop-types';
import { Container, Draggable } from 'react-smooth-dnd';

BoardColumn.propTypes = {
  data: PropTypes.object,
  onCardDrop: PropTypes.func,
  getChildPayload: PropTypes.func,
};

function BoardColumn({ data = {}, onCardDrop = null, getChildPayload = null }) {
  return (
    <Box sx={{ width: COLUMN_WIDTH, height: '100%', ml: 2, color: 'background.contrastText', overflowY: 'hidden' }}>
      <Stack
        spacing={1}
        sx={{
          maxHeight: '100%',
          bgcolor: 'background.main',
          borderRadius: 1,
        }}
      >
        <Box sx={{ p: 1, pb: 0 }}>
          <InputTitle data={data} />
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
              '& > .smooth-dnd-draggable-wrapper:first-of-type': { mt: -1 },

              '& .card-drop-preview': {
                mt: 1,
                bgcolor: 'blur.secondary',
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
            onDrop={dropResult => onCardDrop(data.columnId, dropResult)}
            getChildPayload={cardIndex => getChildPayload(data.columnId, cardIndex)}
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: 'card-drop-preview',
            }}
            dropPlaceholderAnimationDuration={200}
          >
            {data.cards.length > 0 ? (
              data.cards.map(card => (
                <Draggable key={card.cardId}>
                  <CardColumn data={card} />
                </Draggable>
              ))
            ) : (
              <Typography
                variant='body2'
                sx={{
                  position: 'absolute',
                  inset: 0,

                  color: 'background.dark',
                  textAlign: 'center',
                  lineHeight: '30px' /* minHeight of container is 30 */,
                }}
              >
                No card here
              </Typography>
            )}
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
