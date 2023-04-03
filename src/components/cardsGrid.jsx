import * as React from 'react';
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CountryCard from './countryCard';




export default function CardsGrid({query, filter, getDraggedCountry}){
  const [countries, setCountries] = useState([]);
  let res;


  const onDragCard = (countryCode)=>{
    let country = countries.find((country) => country.cca2 === countryCode);
    let countryInfo = [country.cca2,country.name.common,country.flags.svg]
    getDraggedCountry(countryInfo);
    
  }

  const filterCountries = (countriesArr,filter, favArray)=>{

  if(filter ==='No filter' || filter ==='')
    return countriesArr;
  else if(filter ==='favourites'){

  let arrayFiltered = countriesArr.filter((el) => {
    return favArray.some((f) => {
        return (f[0] === el.cca2);
      });
  });
    return arrayFiltered;
  }else{
  let tempCountries = countriesArr.filter((country)=>{
    return country['region'].includes(filter);
  })
  console.log('here');
  console.log(tempCountries)
  return tempCountries;
  }
}



const fetchCountries = async (searchValue,filterValue) => {
    let url;
        if (!searchValue) {
            
            url = 'https://restcountries.com/v3.1/all';

        }
        else {
            url = 'https://restcountries.com/v3.1/name/'+ searchValue;
        }
    await fetch(url)
      .then(response => {

        res = response.status;
        return response.json()
   
      })
      .then(data => {
        if(res !== 200)
          setCountries([])
        else
          setCountries(filterCountries(data,filterValue,[]))
        
      })
  };


  useEffect(() => {
  fetchCountries(query,filter);
  }, [query,filter]);

 

      return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={7}>
        {countries?.map(country => (
        <Grid item xs ={4} key={country.cca2}>         
        <CountryCard id ={country.cca2}  onDragCard ={onDragCard.bind(this)}  imgH = {200} title={country.name.common} imgSrc ={country.flags.svg} capital={country.capital} reigon={country.region} population={(country.population).toLocaleString(undefined, { maximumFractionDigits: 2 })}></CountryCard>
        </Grid>
        ))}
        
          
        
      </Grid>
    </Box>
  );
       
  }
