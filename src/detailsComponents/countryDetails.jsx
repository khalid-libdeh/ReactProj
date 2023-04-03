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
import { useState, useEffect } from 'react';
import CountryDetailsCard from './countryDetailsCard';

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



export default function CountryDetails(props){
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});

  let res;
  const fetchCountries = async () => {
            
    await fetch('https://restcountries.com/v3.1/all')
      .then(response => {

        res = response.status;
        return response.json()
   
      })
      .then(data => {
        if(res !== 200)
          setCountries([])
        else
          setCountries(data)
        
      })
  };
  function findCountryByCode(array, cca2) {
    return array.find((element) => {
      return element.cca2 === cca2;
    })
  }

  useEffect(() => {
    fetchCountries();
    setCountry(findCountryByCode(countries,props.countryCode))
    console.log(country)
    }, []);

    //commonName= {country[0].name.common}
   // topLevelDomain = {country[0].cca2}
   // population = {country[0].population}
   // currencies = {country[0].currencies[0]}
   // region = {country[0].region}
   // languages = {country[0].languages}
   // subRegion = {country[0].subRegion}
   // captial = {country[0].capital}


    return(
          <DetailsWrapper>
          <FlexDisplay>
          <FlagImage  ></FlagImage>

          
    
           <CountryDetailsCard
           // commonName= {country[0]['name']['common']}
            //topLevelDomain = {country[0].cca2}
           // population = {country[0].population}
           //  currencies = {country[0].currencies[0]}
           //   region = {country[0].region}
           // languages = {country[0].languages}
           //  subRegion = {country[0].subRegion}
           //   captial = {country[0].capital}
              variant="outlined"></CountryDetailsCard>
           
            
  
            </FlexDisplay>
            </DetailsWrapper>
        );
}