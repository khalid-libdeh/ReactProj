import * as React from 'react';
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CountryCard from './countryCard';
import styled from 'styled-components';


export default function CardsGrid({ currentCountries, favCountries, sendAddedFavToMain, sendFavToRemoveToMain }) {
  let favClass = '';
  const handleClick = (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();

  }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={10}>
        {currentCountries?.map(country => (
          <Grid item xs={10} md={6} lg={4} key={country.cca2} >
            <CountryCard noWrap sx={{ maxWidth: 100 }} favCountries={favCountries} removeFav={sendFavToRemoveToMain.bind(this)} addFav={sendAddedFavToMain.bind(this)} onClick={handleClick} id={country.cca2} imgH={200} title={country.name.common} imgSrc={country.flags.svg} capital={country.capital} reigon={country.region} population={(country.population).toLocaleString(undefined, { maximumFractionDigits: 2 })}></CountryCard>
          </Grid>
        ))}



      </Grid>
    </Box>
  );

}
