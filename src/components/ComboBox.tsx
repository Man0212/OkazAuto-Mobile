import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface ComboBoxProps {
  id: string;
  options: { label: string }[];
  label: string;
  defaultValue?: any;
  width: string;
  register: any; 
  sx?: object;
  handleChange?: (value: any) => void; 
}

const ComboBox: React.FC<ComboBoxProps> = ({ id, options, label, defaultValue, width, register=()=>{}, sx, handleChange = () => {} }) => {
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={options}
      sx={{ width: width, ...sx }} 
      defaultValue={defaultValue}
      onChange={(event, value) => handleChange(value)} 
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};

export default ComboBox;
