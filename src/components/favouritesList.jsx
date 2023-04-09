import * as React from 'react';
import List from '@mui/material/List';
import CancelIcon from '@mui/icons-material/Cancel';
import { SvgIcon } from '@mui/material';
import US from './flags/us.svg'
import DE from './flags/de.svg'
import JR from './flags/jr.svg'
import styled from 'styled-components';
import FavListCountry from './favlistICountry';
import useMediaQuery from '@mui/material/useMediaQuery';

const FlagIcon = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
    padding-right: 10px;
`;

const ListStyle = styled.div`
    box-shadow: 0 0 5px 2px #DCDCDC;
    background: white;
    visibility: visible;

    @media screen and (max-width: 479px) {
        display: none;
        
        }
`;

const StyledCancelIcon = styled(CancelIcon)`
    background-color: white;
    color: #e3e3e3;
`;
export default function FavouritesCountries({sendDroppedToMain, currentFavourites,sendCountryToRemoveToMain }) {
    
    const handleDragOver = (event)=>{
        event.stopPropagation();
        event.preventDefault();
    }

    const handleDrop = (event)=>{
        event.preventDefault();
        sendDroppedToMain(event.dataTransfer.getData('text/plain'))
    }

    const handleOnRemoveClick = (countryCode)=>{
        sendCountryToRemoveToMain(countryCode)
        
    }

    return(
        <ListStyle onDragOver={handleDragOver} onDrop ={handleDrop.bind(this)}>
        <List dense sx={{ width: '100%', minWidth: 300,maxWidth: 210, bgcolor: 'white' }}>
        {currentFavourites?.map(country => (
            <FavListCountry key ={country.cca2} id={country.cca2}  name={country.name.common} imgSrc = {country.flags.svg} onClickRemove={handleOnRemoveClick.bind(this)}/>
            ))}
        </List>
        </ListStyle>
      );
    }
/*
   

    

    const handleDrop = ()=>{
        console.log(favList)
        setFavList(oldArray => [...oldArray,droppedCountry] );
    }

    useEffect(() => {

        }, [handleDrop,removeFavItem]);
      
*/

    

//

 