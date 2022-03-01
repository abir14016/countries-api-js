const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = data =>{
    const countriesContainer = document.getElementById('countries-container');
    data.forEach(country =>{
        // console.log(country.continents[0]);
        const div = document.createElement('div');
        div.classList.add('countries');
        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.continents[0]}</p>
            <button onclick = "loadCountryDetails('${country.name.common}')">details</button>
        `;
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name.common;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.continents[0];
        // div.appendChild(p);
        countriesContainer.appendChild(div)
    })
}

const loadCountryDetails = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
    // console.log(url);
}

const displayCountryDetails = country =>{
    console.log(country)
    const countryDiv = document.getElementById('country-details')
    countryDiv.innerHTML=`
        <h5>${country.name.common}</h5>
        <p>Population: ${country.population}</p>
        <img width="200px" src="${country.flags.svg}">
        <p><a href = "${country.maps.googleMaps}">google map</a></p>
    `;
}