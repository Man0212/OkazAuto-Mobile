import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const ComboBox = ({ id, options, label, defaultValue,width , register, sx }) => {
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={options}
      sx={{ width: width}}
      defaultValue={defaultValue}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          {...register(label, { required: true })}
          variant="outlined"
        />
      )}
    />
  );
};

export default ComboBox;
