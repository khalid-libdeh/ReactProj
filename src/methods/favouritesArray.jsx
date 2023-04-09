export const appendToFavourites = (fav, droppedCountry) => {
    let tempFav = fav.slice(0)
    tempFav.push(droppedCountry);
    return tempFav;
}


export const removeFromFavourites = (fav, countryToRemove) => {
    let tempFav = fav.slice(0);
    return (tempFav.filter(country => country.cca2 !== countryToRemove.cca2));
}
