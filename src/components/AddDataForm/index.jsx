import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import InputTitle from 'components/form-controls/InputTitle';
import { INPUT_TITLE_MAX_LENGTH } from 'constant';
import useClickOutside from 'hooks/useClickOutside';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

AddDataForm.propTypes = {
  onAddNewData: PropTypes.func,
  onCancelClick: PropTypes.func,
  isSubmit: PropTypes.bool,
  defaultValues: PropTypes.object,
  sx: PropTypes.object,
};

function AddDataForm(props) {
  const { onAddNewData = null, onCancelClick = null, isSubmit = true, defaultValues = {}, sx = {} } = props;

  const { handleSubmit, control, reset, watch } = useForm({
    defaultValues,
  });
  const watchTitle = watch('title', defaultValues);

  const inputTitleRef = useRef(null);

  const [showInputTitleLength, setShowInputTitleLength] = useState(false);

  useClickOutside(inputTitleRef, setShowInputTitleLength);

  const handleCancelClick = () => {
    if (!onCancelClick) return;
    onCancelClick();
  };
  const onSubmit = ({ title }) => {
    if (!onAddNewData) return;

    onAddNewData(title.trim());
    reset();
  };

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)}>
      <Box ref={inputTitleRef} onClick={() => setShowInputTitleLength(true)}>
        <InputTitle
          control={control}
          name='title'
          inputProps={{ placeholder: 'Enter column title...', maxLength: INPUT_TITLE_MAX_LENGTH }}
          sx={sx}
        />
      </Box>

      {showInputTitleLength && (
        <Typography variant='caption' sx={{ display: 'block', mt: 0.5, textAlign: 'right' }}>
          {watchTitle.length} / {INPUT_TITLE_MAX_LENGTH}
        </Typography>
      )}
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

export default AddDataForm;
