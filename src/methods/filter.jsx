export const filterCountries = (countriesArr, filter, favArray) => {

  if (filter === 'No filter' || filter === '')
    return countriesArr;
  else if (filter === 'favourites') {

    let arrayFiltered = countriesArr.filter((el) => {
      return favArray.some((f) => {
        return (f.cca2 === el.cca2);
      });
    });
    return arrayFiltered;
  } else {
    let tempCountries = countriesArr.filter((country) => {
      return country['region'].includes(filter);
    })
    return tempCountries;
  }
}