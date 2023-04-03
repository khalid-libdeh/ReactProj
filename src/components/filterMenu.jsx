import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';

const FilterStyle = styled.div`
  border: 0;
  box-shadow: 0 0 5px 1px #DCDCDC;
  min-height: 2.5rem;
`;

export default function FilterMenu({onFilterChange}) {
  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value); 
  };

  return (
    <FilterStyle>
    <Box sx={{ minWidth: 200, minHeight: 50, bgcolor: 'white' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" >Filter by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={'No filter'}>No Filter</MenuItem>
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'America'}>America</MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'favourites'}>Favourites</MenuItem>
          <MenuItem value={'Oceania'}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </FilterStyle>
  );
}
