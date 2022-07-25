import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Fade, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import 'App.css';
import background from 'assets/imgs/background.jpg';
import AddColumnForm from 'components/AddColumnForm';
import BoardColumn from 'components/BoardColumn';
import Header from 'components/Header';
import { COLUMN_WIDTH } from 'constant';
import useClickOutside from 'hooks/useClickOutside';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Draggable } from 'react-smooth-dnd';
import theme from 'styles/Style';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const formAddNewColumnRef = useRef(null);

  const [columns, setColumns] = useState([
    {
      columnId: uuidv4(),
      columnTitle: 'Learn English',
      cards: [
        { cardId: uuidv4(), cardTitle: 'Vocabulary' },
        { cardId: uuidv4(), cardTitle: 'Grammar' },
        { cardId: uuidv4(), cardTitle: 'Listening' },
      ],
    },
    {
      columnId: uuidv4(),
      columnTitle: 'Learn Programming',
      cards: [
        { cardId: uuidv4(), cardTitle: 'Fundamentally Knowledge' },
        { cardId: uuidv4(), cardTitle: 'Algorithm & Datastructure' },
      ],
    },
    {
      columnId: uuidv4(),
      columnTitle: 'Activities',
      cards: [
        { cardId: uuidv4(), cardTitle: 'Playing football' },
        { cardId: uuidv4(), cardTitle: 'Running' },
        { cardId: uuidv4(), cardTitle: 'Gym' },
        { cardId: uuidv4(), cardTitle: 'Street workout' },
        { cardId: uuidv4(), cardTitle: 'Meditating' },
        { cardId: uuidv4(), cardTitle: 'Playing football' },
        { cardId: uuidv4(), cardTitle: 'Running' },
        { cardId: uuidv4(), cardTitle: 'Gym' },
        { cardId: uuidv4(), cardTitle: 'Street workout' },
        { cardId: uuidv4(), cardTitle: 'Meditating' },
        { cardId: uuidv4(), cardTitle: 'Playing football' },
        { cardId: uuidv4(), cardTitle: 'Running' },
        { cardId: uuidv4(), cardTitle: 'Gym' },
        { cardId: uuidv4(), cardTitle: 'Street workout' },
        { cardId: uuidv4(), cardTitle: 'Meditating' },
      ],
    },
    {
      columnId: uuidv4(),
      columnTitle: 'Arcade',
      cards: [
        { cardId: uuidv4(), cardTitle: 'Listening music' },
        { cardId: uuidv4(), cardTitle: 'Playing video games' },
        { cardId: uuidv4(), cardTitle: 'Watching movie' },
      ],
    },
    {
      columnId: uuidv4(),
      columnTitle: 'Go out',
      cards: [
        { cardId: uuidv4(), cardTitle: 'Coffeeshop' },
        { cardId: uuidv4(), cardTitle: 'Shopping' },
      ],
    },
    {
      columnId: uuidv4(),
      columnTitle: 'Intend',
      cards: [],
    },
  ]);
  const [showFormAddNewColumn, setShowFormAddNewColumn] = useState(false);

  useClickOutside(formAddNewColumnRef, setShowFormAddNewColumn);

  const getCardPayload = (columnId, cardIndex) => columns.find(column => column.columnId === columnId).cards[cardIndex];

  const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }

    return result;
  };

  const handleOnColumnDrop = dropResult => {
    const newColumns = applyDrag([...columns], dropResult);
    setColumns(newColumns);
  };

  const handleOnCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex === null && dropResult.addedIndex === null) return;

    const newColumns = [...columns];
    const columnIndex = newColumns.findIndex(column => column.columnId === columnId);
    const newColumn = newColumns[columnIndex];
    newColumn.cards = applyDrag(newColumn.cards, dropResult);
    newColumns.splice(columnIndex, 1, newColumn);

    setColumns(newColumns);
  };

  const handleCancelClick = () => setShowFormAddNewColumn(false);

  const methods = useForm();

  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ height: '100vh', background: `url(${background}) no-repeat center center` }}>
        <Box component='header' sx={{ px: 2, bgcolor: 'primary.main' }}>
          <Header />
        </Box>
        <Stack direction='row' sx={{ position: 'relative', height: '100%' }} component='main'>
          <Stack
            direction='row'
            sx={{
              flexWrap: 'nowrap',
              mb: 1,
              py: 5,

              position: 'absolute',
              top: 0,
              right: 16,
              bottom: 0,
              left: 16,

              overflowX: 'auto',
              overflowY: 'hidden',

              '&::-webkit-scrollbar': {
                height: 12,

                '&-thumb': {
                  backgroundColor: 'scrollbar.thumb',
                  borderRadius: 2,
                },

                '&-track-piece': {
                  backgroundColor: 'scrollbar.track',
                  borderRadius: 2,

                  '&:start': {
                    ml: 8,
                  },

                  ':end': {
                    mr: 8,
                  },
                },
              },

              '& > .smooth-dnd-container.horizontal': {
                display: 'flex',
                minWidth: 'unset',

                '& .column-ghost': {
                  transition: 'transform 0.18s ease',
                  transform: 'rotateZ(5deg)',
                },

                '& .column-ghost-drop': {
                  transition: 'transform 0.18s ease-in-out',
                  transform: 'rotateZ(0deg)',
                },

                '& .column-drop-preview': {
                  ml: 2,
                  bgcolor: 'blur.main',
                  borderRadius: 1,
                },
              },
            }}
          >
            <Box
              sx={{ position: 'relative', height: 'fit-content', width: COLUMN_WIDTH, flexShrink: 0 }}
              ref={formAddNewColumnRef}
            >
              <Button
                fullWidth
                startIcon={<AddIcon />}
                size='small'
                onClick={() => setShowFormAddNewColumn(true)}
                sx={{
                  justifyContent: 'flex-start',
                  px: 2,
                  py: 1,

                  fontSize: 14,
                  textTransform: 'unset',
                  color: 'primary.contrastText',
                  bgcolor: 'rgba(0, 0, 0, 0.25)',

                  '&:hover': {
                    bgcolor: '#ffffff3d',
                  },
                }}
              >
                Add a column
              </Button>
              <Fade
                in={showFormAddNewColumn}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 'tooltip',

                  p: 1,
                  borderRadius: 1,
                  bgcolor: 'background.main',
                }}
              >
                <Box>
                  <AddColumnForm onCancelClick={handleCancelClick} />
                </Box>
              </Fade>
            </Box>
            {columns.length > 0 && (
              <Container
                groupName='col'
                orientation='horizontal'
                onDrop={handleOnColumnDrop}
                dragClass='column-ghost'
                dropClass='column-ghost-drop'
                dropPlaceholder={{
                  animationDuration: 150,
                  showOnTop: true,
                  className: 'column-drop-preview',
                }}
                dropPlaceholderAnimationDuration={200}
              >
                {columns.map(column => (
                  <Draggable key={column.columnId}>
                    <BoardColumn data={column} onCardDrop={handleOnCardDrop} getChildPayload={getCardPayload} />
                  </Draggable>
                ))}
              </Container>
            )}
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
