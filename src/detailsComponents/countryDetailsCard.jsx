import * as React from 'react';
import styled from 'styled-components';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const FlexDisplay = styled.div`
    display: flex;
    gap: 7rem;
`;

const BoldFont = styled.span`
    font-weight: bold;
`;

const DetailsCard = styled(CardContent)`
    margin-top: 5rem;
    background: background: #fafafa;
    height: 5rem;
`;

const flexDev = styled.div`
`

export default function CountryDetailsCard(props){

return (
    
    <DetailsCard>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="#fafafa;">
       
      </Typography>
      <Typography variant="h5" component="span">
        {props.name}
      </Typography>
      <Typography component="span">
        <FlexDisplay>
        <div>
        <BoldFont>Native Name: </BoldFont> {props.commonName}
        </div>
        <div>
        <BoldFont>Top Level Domain: </BoldFont> {props.topLevelDomain}
        </div>
        </FlexDisplay>
      </Typography>
      <Typography component="span">
      <FlexDisplay>
        <div>
        <BoldFont>Population: </BoldFont> {props.population}
        </div>
        <div>
        <BoldFont >Currencies </BoldFont> {props.currencies}
        </div>
        </FlexDisplay>
      </Typography>
      <Typography component="span">
      <FlexDisplay>
        <div>
        <BoldFont>Region: </BoldFont> {props.region}
        </div>
        <div>
        <BoldFont>Languages </BoldFont> {props.languages}
        </div>
        </FlexDisplay>
      </Typography>
      <Typography component="span">
      
        <BoldFont>Sub Region: </BoldFont>{props.subRegion}

      </Typography>
      <Typography >

      <BoldFont>Capital: </BoldFont>{props.captial}

      </Typography>
    </CardContent>
    </DetailsCard>

);
}