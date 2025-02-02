import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({fieldname}) {
  const [thisColor, setColor] = React.useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
      <FormControl variant="standard" sx={{ m: 1, width: '25ch' }}>
        <InputLabel id="demo-simple-select-standard-label">{fieldname}</InputLabel>
        <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={thisColor}
        onChange={handleChange}
        label="Color"
        >
        <MenuItem value={"Category 1"}>Category 1</MenuItem>
        <MenuItem value={"Category 2"}>Category 2</MenuItem>
        <MenuItem value={"Category 3"}>Category 3</MenuItem>
        <MenuItem value={"Category 4"}>Category 4</MenuItem>
        </Select>
    </FormControl>  
    </div>
    
    
  );
}