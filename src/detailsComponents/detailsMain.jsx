import * as React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button'
import { useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CountryDetails from './countryDetails';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import { fetchCountries } from '../methods/api';

const BackButton = styled(Button)`
    color:black !important;
    background: white !important;
    width: 8rem !important;
    gap: 0.8rem !important;
    text-align: !important;
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

const HeaderContainer = styled.div`

`;
export default function DetailsMain(props) {

    return (
        <HeaderContainer>
            <Header />
            <MainWrapper>
                <StyledEngineProvider injectFirst>

                    <BackButton variant="text">
                        <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
                        <LinkNoStyle to={'/ReactProj/'}>Back</LinkNoStyle>
                    </BackButton>
                </StyledEngineProvider>
                <CountryDetails></CountryDetails>
            </MainWrapper>
        </HeaderContainer>
    );
}