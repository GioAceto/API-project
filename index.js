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
  addNewEUCountry,
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
app.get('/countries/north_america', getNACountries)
app.get('/countries/central_america', getCACountries)
app.get('/countries/caribbean', getCRCountries)
app.get('/countries/south_america', getSACountries)
app.get('/countries/europe', getEUCountries)
app.get('/countries/middle_east', getMECountries)
app.get('/countries/africa', getAFCountries)
app.get('/countries/asia', getASCountries)
app.get('/countries/oceania', getOCCountries)

app.get('/countries/:name', renderCountryByName)
app.get('/countries/north_america/:name', getNACountryByName)
app.get('/countries/central_america/:name', getCACountryByName)
app.get('/countries/caribbean/:name', getCRCountryByName)
app.get('/countries/south_america/:name', getSACountryByName)
app.get('/countries/europe/:name', getEUCountryByName)
app.get('/countries/middle_east/:name', getMECountryByName)
app.get('/countries/africa/:name', getAFCountryByName)
app.get('/countries/asia/:name', getASCountryByName)
app.get('/countries/oceania/:name', getOCCountryByName)

app.get('/api/countries/', getAllCountries)
app.get('/api/countries/:name', getCountryByName)
app.get('/api/region/:id', getCountryByRegionId)

app.get('*', errorFunction)

app.post('/countries/europe', bodyParser.json(), addNewEUCountry)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})