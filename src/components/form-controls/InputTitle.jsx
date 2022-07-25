import { OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputTitle.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.object,
  sx: PropTypes.object,
  inputProps: PropTypes.object,
};

function InputTitle({ control, name, data = {}, sx = {}, inputProps = {} }) {
  return (
    <Controller
      control={control}
      name={name || data.columnTitle}
      render={({ field: { onChange, onBlur, value }, formState }) => (
        <OutlinedInput
          name={name}
          onChange={onChange}
          value={value || data.columnTitle}
          size='small'
          fullWidth
          sx={{
            '& > input': {
              p: 1,
              fontSize: 14,
              fontWeight: 600,
              color: 'background.contrastText',

              '&:focus': {
                backgroundColor: 'primary.contrastText',

                '& + fieldset': {
                  borderWidth: 2,
                },
              },
            },

            '& > fieldset': {
              borderWidth: 0,
            },

            ...sx,
          }}
          {...inputProps}
        />
      )}
    />
  );
}

export default InputTitle;
