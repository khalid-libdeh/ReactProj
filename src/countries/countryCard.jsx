import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { Button, Box } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import useMediaQuery from '@mui/material/useMediaQuery';


const BoldText = styled.span`
    font-weight: bold;
`;
const CardTitle = styled(Typography)`
    
`;

const StyledCardContent = styled(CardContent)`
    display: block;
    font-size: 1rem;
    margin-left: 0.8rem;
    margin-top: 0.8rem;
`;

const StyledCardDetails = styled.div`
    margin-top: 0.8rem;
    line-height: 1.6;
`;

const StyledCard = styled(Card)`
    border-radius: 2rem;
    max-width: 100%;
`;

const LinkNoStyle = styled(Link)`
     text-decoration: none;
     color: inherit;     
`;
const FavStarButton = styled(Button)`
     display: none;
     visibility: hidden;
     text-align: right;
     color: grey !important;
     background: white !important;
     @media screen and (max-width: 479px) {
     visibility: visible;
     
     }
`;

//{title,imgSrc,population,reigon,capital}
export default function (props) {


     const handleClick = (e) => {
          e.nativeEvent.stopImmediatePropagation();
          e.preventDefault();
          if (e.currentTarget.classList.contains('active')) {
               e.currentTarget.classList.add('notActive')
               e.currentTarget.classList.remove('active')
               props.removeFav(props.id)
          } else {
               e.currentTarget.classList.add('active')
               e.currentTarget.classList.remove('notActive')
               props.addFav(props.id)
          }
     }

 

     const theme = useTheme();
     const countryParam = new URLSearchParams("?countryName=" + props.title);
     return (
          <LinkNoStyle to={'/ReactProj/details?' + countryParam}>
               <StyledCard fullWidth={true} draggable onDragStart={event => { event.dataTransfer.setData("text/plain", props.id) }}
                    sx={{ minWidth: 290, maxWidth: 290, minHeight: 400 }}>
                    <CardMedia
                         sx={{ height: props.imgH, width: 'auto', objectFit: "fit", }}
                         image={props.imgSrc}
                         title={props.title}

                    />

                    <StyledCardContent>
                         <CardTitle gutterBottom variant="h6" component="div">
                              <BoldText>{props.title}</BoldText>
                         </CardTitle>
                         <StyledCardDetails>
                              <div>
                                   <BoldText>Population: </BoldText>
                                   <span>{props.population}</span>
                              </div>
                              <div>
                                   <BoldText>Region: </BoldText>
                                   <span>{props.reigon}</span>
                              </div>
                              <div>
                                   <BoldText>Capital: </BoldText>
                                   <span>{props.capital}</span>
                              </div>
                         </StyledCardDetails>
                    </StyledCardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                         <FavStarButton onClick={handleClick} className={'notActive'}>
                              <StarRateIcon fontSize="medium" />
                         </FavStarButton>
                    </Box>
               </StyledCard>
          </LinkNoStyle>

     );

}
