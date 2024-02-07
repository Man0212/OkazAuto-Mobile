import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Equipement = ({ options, selectedValues, onSelectionChange, onClearSelection }) => {
  const handleSelectionChange = (event, values) => {
    onSelectionChange(values);
  };

  const handleClearSelection = (valueToRemove) => {
    onClearSelection(valueToRemove);
  };

  const uniqueSelectedValues = Array.from(new Set(selectedValues.map((value) => value.title)))
    .map((title) => selectedValues.find((value) => value.title === title));

  return (
    <div>
    <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={options}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
          <li {...props} style={{ display: 'flex', alignItems: 'center', padding: '5px', width: '100%' }}>
            <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: '8px' }} checked={selected || uniqueSelectedValues.some((val) => val.title === option.title)} />
            {option.title}
          </li>
        )}
        value={uniqueSelectedValues}
        onChange={handleSelectionChange}
        defaultValue={selectedValues}
        renderInput={(params) => (
          <TextField {...params} label="Equipement" placeholder="equipement...." />
        )}
        renderTags={(value, getTagProps) => (
          value.length > 0 ? [
            <div key={value[value.length - 1].title}>
            </div>,
          ] : null
        )}
      />

      <div style={{ marginBottom: '10px' }}>
        <br />
        <p style={{ fontSize: '12px', color: 'grey' }}>vos Equipements :</p>
        {uniqueSelectedValues.map((value, index) => (
          <Chip key={index} label={value.title} onDelete={() => handleClearSelection(value)} style={{ marginRight: '10px' , marginTop :'5px'}} />
        ))}
      </div>
    </div>
  );
};

export default Equipement;
