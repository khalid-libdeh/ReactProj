export const fetchCountries = (searchValue) => {
    let url;
    if (!searchValue) {

        url = 'https://restcountries.com/v3.1/all';
        console.log('hereAll')
    }
    else {
        url = 'https://restcountries.com/v3.1/name/' + searchValue;
        console.log('here')
    }
    return fetch(url)
        .then(response => {

            return response.json()

        })

};