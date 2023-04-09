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
    

`;

const SearchIconComp = styled(SearchIcon)`
    margin-bottom: 0.5rem;
    color: grey;
    margin-left: 1.5rem;
`;

const SearchArea = styled(TextField)`
    margin: auto;
    min-width: 5rem;
    border: 0 !important;
    height: 100%;
`;
let debounceTimeout;

export default function SearchField({ sendQueryToMain }) {

    const handleInput = (event) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(()=>{
            sendQueryToMain(event.target.value)
        }, 300)
        
    }


    return (
        <SearchBox sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchIconComp />
            <SearchArea variant="standard" InputProps={{ disableUnderline: true }} type="text" onInput={handleInput} fullWidth margin="normal" id="input-with-sx" placeholder="Search for a country..." />
        </SearchBox>
    );
}