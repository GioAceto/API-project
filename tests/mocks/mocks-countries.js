const allCountries = [{
  id: 3,
  name: "Mexico",
  capital: "Mexico City",
  city: "Mexico City",
  area: "761,606",
  population: "127.6M",
  gdp: "1.27T",
  topExport: "Automobiles",
  currency: "Mexican peso",
  leader: "Andrés Manuel López Obrador",
  language: "Spanish",
  flag: "mx-flag.gif",
  createdAt: "2021-06-23T00:21:08.000Z",
  updatedAt: "2021-06-23T00:21:08.000Z",
  regions: [
    {
      id: 1,
      region: "North America",
      createdAt: "2021-06-23T00:21:08.000Z",
      updatedAt: "2021-06-23T00:21:08.000Z",
      regionsCountries: {
        regionId: 1,
        countryId: 3,
        createdAt: "2021-06-23T00:21:08.000Z",
        updatedAt: "2021-06-23T00:21:08.000Z"
      }
    }
  ]
},
{
  id: 4,
  name: "Belize",
  capital: "Belmopan",
  city: "Belize City",
  area: "8,867",
  population: "390,353K",
  gdp: "1.88B",
  topExport: "Raw sugar",
  currency: "Belize dollar",
  leader: "Johnny Briceño",
  language: "English",
  flag: "bh-flag.gif",
  createdAt: "2021-06-23T00:21:08.000Z",
  updatedAt: "2021-06-23T00:21:08.000Z",
  regions: [
    {
      id: 2,
      region: "Central America",
      createdAt: "2021-06-23T00:21:08.000Z",
      updatedAt: "2021-06-23T00:21:08.000Z",
      regionsCountries: {
        regionId: 2,
        countryId: 4,
        createdAt: "2021-06-23T00:21:08.000Z",
        updatedAt: "2021-06-23T00:21:08.000Z"
      }
    },
    {
      id: 3,
      region: "Caribbean",
      createdAt: "2021-06-23T00:21:08.000Z",
      updatedAt: "2021-06-23T00:21:08.000Z",
      regionsCountries: {
        regionId: 3,
        countryId: 4,
        createdAt: "2021-06-23T00:21:08.000Z",
        updatedAt: "2021-06-23T00:21:08.000Z"
      }
    }
  ]
}]

const singleCountry = [{
  id: 26,
  name: "Brazil",
  capital: "Brasilia",
  city: "São Paulo",
  area: "3,287,956",
  population: "211M",
  gdp: "1.84T",
  topExport: "Soybeans",
  currency: "Brazilian real",
  leader: "Jair Bolsonaro",
  language: "Portuguese",
  flag: "br-flag.gif",
  createdAt: "2021-06-23T00:21:08.000Z",
  updatedAt: "2021-06-23T00:21:08.000Z",
  regions: [
    {
      id: 4,
      region: "South America",
      createdAt: "2021-06-23T00:21:08.000Z",
      updatedAt: "2021-06-23T00:21:08.000Z",
      regionsCountries: {
        regionId: 4,
        countryId: 26,
        createdAt: "2021-06-23T00:21:08.000Z",
        updatedAt: "2021-06-23T00:21:08.000Z"
      }
    }
  ]
}]

const allCountriesByRegion = [{
  id: 1,
  name: "The United States of America",
  capital: "Washington DC",
  city: "New York City",
  area: "3,677,649",
  population: "328.2M",
  gdp: "21.43T",
  topExport: "Refined petroleum",
  currency: "US dollar",
  leader: "Joseph Biden",
  language: "English",
  flag: "us-flag.gif",
  createdAt: "2021-06-23T00:21:08.000Z",
  updatedAt: "2021-06-23T00:21:08.000Z",
  regions: [
    {
      id: 1,
      region: "North America",
      createdAt: "2021-06-23T00:21:08.000Z",
      updatedAt: "2021-06-23T00:21:08.000Z",
      regionsCountries: {
        regionId: 1,
        countryId: 1,
        createdAt: "2021-06-23T00:21:08.000Z",
        updatedAt: "2021-06-23T00:21:08.000Z"
      }
    }
  ]
},
{
  id: 2,
  name: "Canada",
  capital: "Ottawa",
  city: "Toronto",
  area: "3,855,100",
  population: "37.59M",
  gdp: "1.74T",
  topExport: "Crude petroleum",
  currency: "Canadian dollar",
  leader: "Justin Trudeau",
  language: "English",
  flag: "ca-flag.gif",
  createdAt: "2021-06-23T00:21:08.000Z",
  updatedAt: "2021-06-23T00:21:08.000Z",
  regions: [
    {
      id: 1,
      region: "North America",
      createdAt: "2021-06-23T00:21:08.000Z",
      updatedAt: "2021-06-23T00:21:08.000Z",
      regionsCountries: {
        regionId: 1,
        countryId: 2,
        createdAt: "2021-06-23T00:21:08.000Z",
        updatedAt: "2021-06-23T00:21:08.000Z"
      }
    }
  ]
},
{
  id: 3,
  name: "Mexico",
  capital: "Mexico City",
  city: "Mexico City",
  area: "761,606",
  population: "127.6M",
  gdp: "1.27T",
  topExport: "Automobiles",
  currency: "Mexican peso",
  leader: "Andrés Manuel López Obrador",
  language: "Spanish",
  flag: "mx-flag.gif",
  createdAt: "2021-06-23T00:21:08.000Z",
  updatedAt: "2021-06-23T00:21:08.000Z",
  regions: [
    {
      id: 1,
      region: "North America",
      createdAt: "2021-06-23T00:21:08.000Z",
      updatedAt: "2021-06-23T00:21:08.000Z",
      regionsCountries: {
        regionId: 1,
        countryId: 3,
        createdAt: "2021-06-23T00:21:08.000Z",
        updatedAt: "2021-06-23T00:21:08.000Z"
      }
    }
  ]
}]


module.exports = { allCountries, allCountriesByRegion, singleCountry }