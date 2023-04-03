import * as React from 'react';
import List from '@mui/material/List';
import CancelIcon from '@mui/icons-material/Cancel';
import { SvgIcon } from '@mui/material';
import US from './flags/us.svg'
import DE from './flags/de.svg'
import JR from './flags/jr.svg'
import styled from 'styled-components';
import FavListCountry from './favlistICountry';
import { useState, useEffect } from 'react';

const FlagIcon = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
    padding-right: 10px;
`;

const ListStyle = styled.div`
    box-shadow: 0 0 5px 2px #DCDCDC;
    background: white;
`;

const StyledCancelIcon = styled(CancelIcon)`
    background-color: white;
    color: #e3e3e3;
`;
export default function FavouritesCountries({droppedCountry}) {
    const [favList, setFavList] = useState([]);

    const removeFavItem = (fav, countryCode)=>{
        setFavList( (fav?.filter(country => country[0] !== countryCode)));    
        
    }

    const handleDragOver = (event)=>{
        event.stopPropagation();
        event.preventDefault();
        console.log('dragging');
    }

    const handleDrop = ()=>{
        console.log(favList)
        setFavList(oldArray => [...oldArray,droppedCountry] );
    }

    useEffect(() => {

        }, [handleDrop,removeFavItem]);
      

    return(
    <ListStyle onDragOver={handleDragOver} onDrop = {handleDrop} >
    <List dense sx={{ width: '100%', minWidth: 300,maxWidth: 210, bgcolor: 'white' }}>
    {favList?.map(country => (
        <FavListCountry key ={country[0]} id={country[0]} onClickRemove={removeFavItem.bind(favList,this)} name={country[1]} imgSrc = {country[2]}/>
        ))}
    </List>
    </ListStyle>
  );
}