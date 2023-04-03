import * as React from 'react';
import styled from 'styled-components';
import CardsGrid from './cardsGrid';
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
`;

export default function Main() {
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [draggedCountry, setDraggedCountry] = useState([]);
    
    return (
        <MainDiv>
          <SearchFilterWrapper>
            <SearchField onQuery={setQuery}/>
            <FilterMenu onFilterChange={setFilter}/>
          </SearchFilterWrapper>
          
          <FlexDisplay>
          <FavouritesCountries droppedCountry={draggedCountry}></FavouritesCountries>
          <CardsGrid getDraggedCountry={setDraggedCountry} query={query} filter ={filter}></CardsGrid>
          </FlexDisplay>
        </MainDiv>
        
    );
  }