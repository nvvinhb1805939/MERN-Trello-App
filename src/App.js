import { ThemeProvider } from '@mui/system';
import theme from 'styles/Style';
import { Stack, Box, Button } from '@mui/material';
import 'App.css';
import background from 'assets/imgs/background.jpg';
import Header from 'components/Header';
import BoardColumn from 'components/BoardColumn';
import AddIcon from '@mui/icons-material/Add';
import { Container, Draggable } from 'react-smooth-dnd';

function App() {
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

                '& .column-drop-preview': {
                  ml: 2,
                  bgcolor: 'blur.main',
                  border: '1px dashed',
                  borderColor: 'background.main',
                  borderRadius: 1,
                },
              },
            }}
          >
            <Box sx={{ height: 'fit-content', flexShrink: 0 }}>
              <Button
                fullWidth
                startIcon={<AddIcon />}
                size='small'
                sx={{
                  justifyContent: 'flex-start',
                  fontSize: 14,
                  textTransform: 'unset',
                  color: 'primary.contrastText',
                  bgcolor: 'rgba(0, 0, 0, 0.25)',

                  '&:hover': {
                    bgcolor: '#ffffff3d',
                  },
                }}
              >
                Add another column
              </Button>
            </Box>
            <Container
              groupName='col'
              orientation='horizontal'
              onDragStart={e => console.log('drag started', e)}
              onDragEnd={e => console.log('drag end', e)}
              onDrop={e => console.log('dop', e)}
              dragClass='card-ghost'
              dropClass='card-ghost-drop'
              onDragEnter={() => {
                console.log('drag enter:');
              }}
              onDragLeave={() => {
                console.log('drag leave:');
              }}
              onDropReady={p => console.log('Drop ready: ', p)}
              dropPlaceholder={{
                animationDuration: 150,
                showOnTop: true,
                className: 'column-drop-preview',
              }}
              dropPlaceholderAnimationDuration={200}
              lockAxis='x'
            >
              <Draggable>
                <BoardColumn />
              </Draggable>
              <Draggable>
                <BoardColumn />
              </Draggable>
              <Draggable>
                <BoardColumn />
              </Draggable>
              <Draggable>
                <BoardColumn />
              </Draggable>
              <Draggable>
                <BoardColumn />
              </Draggable>
              <Draggable>
                <BoardColumn />
              </Draggable>
              <Draggable>
                <BoardColumn />
              </Draggable>
            </Container>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
