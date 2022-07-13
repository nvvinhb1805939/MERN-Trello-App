import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar, IconButton, Stack } from '@mui/material';
import avatar from 'assets/imgs/avatar.png';
import Logo from 'components/Logo';
import Search from 'components/Search';

function Header() {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' component='nav' sx={{ py: 1 }}>
      <Logo />
      <Stack direction='row' alignItems='center' spacing={1}>
        <Search />
        <IconButton size='large'>
          <NotificationsNoneIcon sx={{ color: 'blur.contrastText' }} />
        </IconButton>
        <Avatar src={avatar} />
      </Stack>
    </Stack>
  );
}

export default Header;
