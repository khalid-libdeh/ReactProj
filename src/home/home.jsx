import * as React from 'react';
import { useEffect, useState } from "react";
import Header from '../components/header';
import Main from '../components/main';
import { fetchCountries } from '../methods/api';
import { filterCountries } from '../methods/filter';
import { appendToFavourites, removeFromFavourites } from '../methods/favouritesArray';
import { setLocalStorage, getFromLocalStorage } from '../methods/localStorage';

export default function Home(props) {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [favList, setFavList] = useState(()=>{
    const favourites = getFromLocalStorage('favourites')
    return favourites ? favourites : [];
  });
  const [addedFav, setAddedFav] = useState();


  const appendDroppedCountry = (countryCode)=>{
    let addedFav = countries.find((country) => country.cca2 === countryCode)
    if(favList.some(favCountry => favCountry.cca2 === countryCode))
      return
      setAddedFav(addedFav)
  }

  const removeFavCountry = (countryCode)=>{
    let country = countries.find((country) =>country.cca2 === countryCode);
      setFavList(removeFromFavourites(favList,country))
  }

  useEffect(() => {
    fetchCountries(query).then((data)=>{
        if(data.status === 404)
          setCountries([])
        else
          setCountries(data)
    })
    
  }, [query]);

  useEffect(()=>{
    setFilteredCountries(filterCountries(countries,filter,favList));
  },[countries,filter,favList]);

  useEffect(() => {
    setLocalStorage('favourites',favList);
  }, [favList]);

 


  useEffect(()=>{
    if(addedFav === undefined || addedFav === null)
      return
    setFavList(appendToFavourites(favList,addedFav))
    
  },[addedFav])

  useEffect(()=>{
    if(addedFav === undefined || addedFav === null)
      return
    setFavList(appendToFavourites(favList,addedFav))
    
  },[addedFav,setFavList])


  return (
    <div>
    <Header onChangeMode={props.onChangeMode} />
    <Main currentCountries ={filteredCountries} favCountries ={favList} updateQuery={setQuery} updateFilter={setFilter} getDroppedCountry={appendDroppedCountry} getRemovedCountry={removeFavCountry} sendAddedFavToHome={appendDroppedCountry} sendRemovedFavToHome={removeFavCountry}/>
    </div>
  );
}


