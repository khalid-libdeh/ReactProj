import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import {  Link } from 'react-router-dom';


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
`;

const LinkNoStyle = styled(Link)`
     text-decoration: none;
     color: inherit;     
`;
//{title,imgSrc,population,reigon,capital}
export default class CountryCard extends React.Component{
     constructor(props) {
          super(props)
          this.handleDragStart = this.handleDragStart.bind(this)
      }

     handleDragStart = ()=>{
          this.props.onDragCard(this.props.id);
     }
     
     render(){
       return (
    <LinkNoStyle to={'/ReactProj/details'} state = {this.props.id}>
    <StyledCard  draggable onDragStart={this.handleDragStart} sx={{ minWidth:330, maxWidth:300, minHeight:400}}>
    <CardMedia
      sx={{ height: this.props.imgH, width: 'auto', objectFit: "fit"}}
      image= {this.props.imgSrc}
      title= {this.props.title}
      
    />

    <StyledCardContent>
    <CardTitle gutterBottom variant="h6" component="div">
         <BoldText>{this.props.title}</BoldText> 
    </CardTitle>
    <StyledCardDetails>
       <div>
            <BoldText>Population: </BoldText>
            <span>{this.props.population}</span>
       </div>
       <div>
            <BoldText>Region: </BoldText>
            <span>{this.props.reigon}</span>
       </div>
       <div>
            <BoldText>Capital: </BoldText>
            <span>{this.props.capital}</span>
       </div>       
    </StyledCardDetails>
    </StyledCardContent>
    </StyledCard>
    </LinkNoStyle>

    );
  }
}
