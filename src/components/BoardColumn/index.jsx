import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack, Typography } from '@mui/material';
import AddDataForm from 'components/AddDataForm';
import CardColumn from 'components/CardColumn';
import { COLUMN_WIDTH } from 'constant';
import useClickOutside from 'hooks/useClickOutside';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';

BoardColumn.propTypes = {
  data: PropTypes.object,
  onAddNewData: PropTypes.func,
  onCardDrop: PropTypes.func,
  getChildPayload: PropTypes.func,
};

function BoardColumn(props) {
  const { onAddNewData = null, data = {}, onCardDrop = null, getChildPayload = null } = props;

  const [showAddDataForm, setShowAddDataForm] = useState(false);

  const formAddNewColumnRef = useRef(null);

  useClickOutside(formAddNewColumnRef, setShowAddDataForm);

  const hanleAddNewCard = newCard => {
    if (!onAddNewData) return;
    onAddNewData(data.columnId, newCard);
  };

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
          <AddDataForm isSubmit={false} defaultValues={{ title: data.columnTitle }} />
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
          {showAddDataForm ? (
            <Box ref={formAddNewColumnRef}>
              <AddDataForm
                onAddNewData={hanleAddNewCard}
                onCancelClick={() => setShowAddDataForm(false)}
                defaultValues={{ title: '' }}
                sx={{
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },

                  '&.MuiOutlinedInput-root > textarea': {
                    fontWeight: 'normal',
                    backgroundColor: 'primary.contrastText',

                    '& + fieldset': {
                      borderWidth: 2,
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
            </Box>
          ) : (
            <Button
              onClick={() => setShowAddDataForm(true)}
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
          )}
        </Box>
      </Stack>
    </Box>
  );
}

export default BoardColumn;
