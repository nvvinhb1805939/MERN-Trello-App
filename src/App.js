import { ThemeProvider } from '@mui/system';
import theme from 'styles/Style';
import { Stack, Box, Button } from '@mui/material';
import 'App.css';
import background from 'assets/imgs/background.jpg';
import Header from 'components/Header';
import BoardColumn from 'components/BoardColumn';
import AddIcon from '@mui/icons-material/Add';

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
            spacing={2}
            sx={{
              flexWrap: 'nowrap',
              position: 'absolute',
              inset: 0,

              mb: 1,
              px: 2,
              py: 5,

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
            }}
          >
            {/* <BoardColumn />
            <BoardColumn />
            <BoardColumn />
            <BoardColumn />
            <BoardColumn />
            <BoardColumn />
            <BoardColumn /> */}
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
                  bgcolor: '#ffffff3d',
                }}
              >
                Add another column
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
