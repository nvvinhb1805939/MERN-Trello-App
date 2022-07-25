import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Stack } from '@mui/material';
import InputTitle from 'components/form-controls/InputTitle';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

AddColumnForm.propTypes = {
  onAddNewColumn: PropTypes.func,
  onCancelClick: PropTypes.func,
  isSubmit: PropTypes.bool,
  defaultValues: PropTypes.string,
  sx: PropTypes.object,
};

function AddColumnForm(props) {
  const { onAddNewColumn = null, onCancelClick = null, isSubmit = true, defaultValues = '', sx = {} } = props;

  const { handleSubmit, control, reset } = useForm({
    defaultValues: { columnTitle: defaultValues },
  });

  const handleCancelClick = () => {
    if (!onCancelClick) return;
    onCancelClick();
  };

  const onSubmit = ({ columnTitle }) => {
    if (!onAddNewColumn) return;

    onAddNewColumn(columnTitle);
    reset();
  };

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)}>
      <InputTitle control={control} name='columnTitle' inputProps={{ placeholder: 'Enter column title...' }} sx={sx} />
      {isSubmit && (
        <Stack sx={{ mt: 1 }} direction='row' spacing={1}>
          <Button variant='contained' type='submit' sx={{ width: 'fit-content', textTransform: 'unset' }}>
            Add column
          </Button>

          <IconButton sx={{ width: 'fit-content' }} onClick={handleCancelClick}>
            <CloseIcon />
          </IconButton>
        </Stack>
      )}
    </Box>
  );
}

export default AddColumnForm;
