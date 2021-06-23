const express = require('express')
const bodyParser = require('body-parser')
const countries = require('./countries')
const { errorFunction,
  getMain,
  renderAllCountries,
  getNACountries,
  getCACountries,
  getCRCountries,
  getSACountries,
  getEUCountries,
  getMECountries,
  getAFCountries,
  getASCountries,
  getOCCountries,
  renderCountryByName,
  getNACountryByName,
  getCACountryByName,
  getCRCountryByName,
  getSACountryByName,
  getEUCountryByName,
  getMECountryByName,
  getAFCountryByName,
  getASCountryByName,
  getOCCountryByName,
  addNewCountry,
  getAllCountries,
  getCountryByName,
  getCountryByRegionId
} = require('./controllers/cont-countries')

const PORT = 1400
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', getMain)

app.get('/countries/', renderAllCountries)
app.get('/countries/:name', renderCountryByName)

app.get('/region/north_america', getNACountries)
app.get('/region/north_america/:name', getNACountryByName)

app.get('/region/central_america', getCACountries)
app.get('/region/central_america/:name', getCACountryByName)

app.get('/region/caribbean', getCRCountries)
app.get('/region/caribbean/:name', getCRCountryByName)

app.get('/region/south_america', getSACountries)
app.get('/region/south_america/:name', getSACountryByName)

app.get('/region/europe', getEUCountries)
app.get('/region/europe/:name', getEUCountryByName)

app.get('/region/middle_east', getMECountries)
app.get('/region/middle_east/:name', getMECountryByName)

app.get('/region/africa', getAFCountries)
app.get('/region/africa/:name', getAFCountryByName)

app.get('/region/asia', getASCountries)
app.get('/region/asia/:name', getASCountryByName)

app.get('/region/oceania', getOCCountries)
app.get('/region/oceania/:name', getOCCountryByName)

app.get('/api/countries/', getAllCountries)
app.get('/api/countries/:name', getCountryByName)
app.get('/api/region/:id', getCountryByRegionId)

app.get('*', errorFunction)

app.post('/api/countries', bodyParser.json(), addNewCountry)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})