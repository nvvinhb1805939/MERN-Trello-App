import { OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputTitle.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  sx: PropTypes.object,
  inputProps: PropTypes.object,
};

function InputTitle(props) {
  const { control = {}, name = '', sx = {}, inputProps = {} } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, formState }) => (
        <OutlinedInput
          name={name}
          onChange={onChange}
          value={value}
          size='small'
          fullWidth
          sx={{
            '& > input': {
              p: 1,
              fontSize: 14,
              fontWeight: 600,
              color: 'background.contrastText',

              '&::placeholder': { fontWeight: 'normal', opacity: 0.8 },

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
