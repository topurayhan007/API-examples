const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  // console.log(countries);
  const countriesContainer = document.getElementById("all-countries");
  /* for (const country of countries) {
  } */
  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h3> Name: ${country.name.common}</h3>
    <p> Capital: ${country.capital ? country.capital[0] : "No Capital"}</p>
    <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    `;
    countriesContainer.appendChild(countryDiv);
  });
};

const loadCountryDetails = (code) => {
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCountryDetail(data[0]));
};

const showCountryDetail = (country) => {
  console.log(country);
  const detailContainer = document.getElementById("country-detail");
  detailContainer.innerHTML = `
    <h2>Country Detail</h2>
    <h3>Name: ${country.name.common}</h3>
    <p>Language: ${Object.values(country.languages)}</p>
    <img src="${country.flags.png}" alt="">
  `;
};

loadCountries();