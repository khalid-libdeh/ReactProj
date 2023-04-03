import * as React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button'
import { StyledEngineProvider } from '@mui/material/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CountryDetails from './countryDetails';
import { useLocation } from 'react-router-dom';
import {  Link } from 'react-router-dom';
import Header from '../components/header';

const BackButton = styled(Button)`
    color:black;
    background: white;
    width: 8rem;
    gap: 0.8rem;
    text-align: center;
`;

const MainWrapper = styled.div`
    display: block;
    margin-top: 4rem;
    margin-left: 2rem;
`;

const LinkNoStyle = styled(Link)`
     text-decoration: none;
     color: inherit;     
`;
export default function DetailsMain(props){
    const location = useLocation();
    const data = location.state;
    return (
        <div>
        <Header/>
        <MainWrapper>
        <StyledEngineProvider injectFirst>
            
            <BackButton variant="text">
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
              <LinkNoStyle to={'/ReactProj/'}>Back</LinkNoStyle>
                </BackButton>
        </StyledEngineProvider>
        <CountryDetails countryCode = {data}></CountryDetails>
        </MainWrapper>
        </div>
    );
}