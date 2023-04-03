import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';
import { SvgIcon } from '@mui/material';
import styled from 'styled-components';

const FlagIcon = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
    padding-right: 10px;
`;

const StyledCancelIcon = styled(CancelIcon)`
    background-color: white;
    color: #e3e3e3;
`;

export default function FavListCountry(props) {

    const handleClick = () => {
        props.onClickRemove(props.id);    
      };

    return(
    <ListItem>
        <FlagIcon src={props.imgSrc}></FlagIcon>
        <ListItemText primary={props.name} />
        <StyledCancelIcon clickable ='true' onClick ={handleClick}></StyledCancelIcon>
    </ListItem>
    )
}