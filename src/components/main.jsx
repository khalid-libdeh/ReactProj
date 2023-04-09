import * as React from 'react';
import styled from 'styled-components';
import CardsGrid from '../countries/cardsGrid';
import FavouritesCountries from './favouritesList';
import SearchField from './searchField';
import FilterMenu from './filterMenu';
import { useState } from 'react';

const MainDiv= styled.div`
    background: #fafafa;
    min-height: 100%;
    margin-top: 4rem;
    padding-inline: 4rem;
`;

const FlexDisplay = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    gap: 1.5rem;
`;

const SearchFilterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
`;

export default function Main({currentCountries, color, favCountries, updateQuery, updateFilter, sendAddedFavToHome, sendRemovedFavToHome ,getDroppedCountry , getRemovedCountry}) {
    
    const sendQueryToHome = (value)=>{
      updateQuery(value)
    }

    const sendFilterToHome = (value)=>{
      updateFilter(value)
    }

    const sendDroppedToHome = (value)=>{
      getDroppedCountry(value)
    }

    const sendCountryToRemoveToHome = (value)=>{
      getRemovedCountry(value)
    }

    return (
        <MainDiv>
          <SearchFilterWrapper>
            <SearchField sendQueryToMain={sendQueryToHome.bind(this)}/>
            <FilterMenu onFilterChange={sendFilterToHome}/>
          </SearchFilterWrapper>
          <FlexDisplay>
          <FavouritesCountries currentFavourites ={favCountries} sendDroppedToMain={sendDroppedToHome} sendCountryToRemoveToMain={sendCountryToRemoveToHome}></FavouritesCountries>
          <CardsGrid color={color} sendAddedFavToMain={sendAddedFavToHome.bind(this)} sendFavToRemoveToMain={sendRemovedFavToHome.bind(this)} favCountries ={favCountries} currentCountries = {currentCountries}></CardsGrid>
          </FlexDisplay>
        </MainDiv>
        
    );
  }