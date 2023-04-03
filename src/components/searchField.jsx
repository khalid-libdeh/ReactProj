import * as React from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import styled from 'styled-components';



const SearchBox = styled(Box)`
    
    background: white;
    gap: 1.5rem;
    box-shadow: 0 0 5px 1px #DCDCDC;
    text-align: center;
    width: 30rem;
    padding-bottom: 0.5rem;
    min-height: 1.8rem;
`;

const SearchIconComp = styled(SearchIcon)`
    margin-bottom: 0.5rem;
    color: grey;
    margin-left: 1.5rem;
`;

const SearchArea = styled(TextField)`
    margin: auto;
    min-width: 5rem;
    border: 0;

`;


export default function SearchField({ onQuery }) {
    
    const handleInput = event => {
        onQuery(event.target.value); 
         
      };


    return (
        <SearchBox sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchIconComp />
            <SearchArea  type="text" onInput={handleInput} fullWidth variant='standard' margin="normal" id="input-with-sx" placeholder="Search for a country..." />
        </SearchBox>
    );
  }