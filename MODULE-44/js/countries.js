const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountries(data));
}
const displayCountries = countries =>{
console.log(countries[0]);
const countriesHTML = countries.map(country => getCountriesHTML(country));
//console.log(countriesHTML);
const container = document.getElementById('countries');
container.innerHTML = countriesHTML.join(' ');

}
//----pass destructuring object parameter-----------
const getCountriesHTML = ({name,flags,area}) =>{

    return `
    <div class='country'>
    <h2>${name.common}</h2>
    <p>Area : ${area}</p>
    <img src = '${flags.png}'>
    </div>
    `
}
loadCountries();
//------------one way-------------
/* const getCountriesHTML = country =>{
    return `
    <div class='country'>
    <h2>${country.name.common}</h2>
    <img src = '${country.flags.png}'>
    </div>
    `
} */

//--------using-destructuring-----------
/* const getCountriesHTML = country =>{
    const {name, flags} = country;
    return `
    <div class='country'>
    <h2>${name.common}</h2>
    <img src = '${flags.png}'>
    </div>
    `
} */
