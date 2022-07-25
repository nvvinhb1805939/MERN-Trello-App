import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Stack } from '@mui/material';
import InputTitle from 'components/form-controls/InputTitle';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

AddColumnForm.propTypes = {
  onCancelClick: PropTypes.func,
};

function AddColumnForm({ onCancelClick = null }) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      columnTitle: '',
    },
  });

  const handleCancelClick = () => {
    if (!onCancelClick) return;
    onCancelClick();
  };

  const onSubmit = data => console.log(data);

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)}>
      <InputTitle
        control={control}
        name='columnTitle'
        inputProps={{ placeholder: 'Enter column title...' }}
        sx={{
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },

          '&  input': {
            fontWeight: 'normal',
            backgroundColor: 'primary.contrastText',

            '&::placeholder': { opacity: 0.8 },

            '& + fieldset': {
              borderWidth: 2,
              borderColor: 'primary.main',
            },
          },
        }}
      />
      <Stack sx={{ mt: 1 }} direction='row' spacing={1}>
        <Button variant='contained' type='submit' sx={{ width: 'fit-content', textTransform: 'unset' }}>
          Add column
        </Button>

        <IconButton sx={{ width: 'fit-content' }} onClick={handleCancelClick}>
          <CloseIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default AddColumnForm;
