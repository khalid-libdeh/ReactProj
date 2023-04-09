import * as React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button'
import { StyledEngineProvider } from '@mui/material/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Grid } from '@mui/material';
import BG from '../components/flags/bg.svg'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState, useEffect, componentWillMount } from 'react';
import CountryDetailsCard from './countryDetailsCard';
import { fetchCountries } from '../methods/api';


const FlagImage = styled.img`
    height: 25rem;
    width: 30rem;
`;

const DetailsWrapper = styled.div`
    margin-top: 4rem;
`;

const DetailsCard = styled(CardContent)`
    margin-top: 5rem;
    background: background: #fafafa;
    height: 5rem;
`;

const FlexDisplay = styled.div`
    display: flex;
    gap: 7rem;
`;

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

const BoldFont = styled.span`
    font-weight: bold;
`;



export default function CountryDetails(){
  const [country, setCountry] = useState();

  const queryParams = new URLSearchParams(window.location.search)
  const countryName = queryParams.get("countryName")

  useEffect(() => {
    fetchCountries(countryName).then((data)=>{
      setCountry(data[0]);
    })
  }, []);
    
  if (country === undefined) {
    return <>Still loading...</>;
  }

  else{
    return(
      <DetailsWrapper>
      <FlexDisplay>
      <FlagImage src={country.flags.svg} ></FlagImage>

      

       <CountryDetailsCard
        commonName= {country.name.common}
        topLevelDomain = {country.cca2}
        population = {country.population}
        currencies = {country.currencies[0]}
        region = {country.region}
        //languages = {country.languages}
        subRegion = {country.subregion}
        captial = {country.capital}
          variant="outlined"></CountryDetailsCard>
       
        

        </FlexDisplay>
        </DetailsWrapper>
    );
  
    }



   
}