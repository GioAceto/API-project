const express = require('express')
const bodyParser = require('body-parser')
const countries = require('./countries')
const { errorFunction,
  getMain,
  renderAllCountries,
  renderNACountries,
  renderCACountries,
  renderCRCountries,
  renderSACountries,
  renderEUCountries,
  renderMECountries,
  renderAFCountries,
  renderASCountries,
  renderOCCountries,
  renderCountryByName,
  renderNACountryByName,
  renderCACountryByName,
  renderCRCountryByName,
  renderSACountryByName,
  renderEUCountryByName,
  renderMECountryByName,
  renderAFCountryByName,
  renderASCountryByName,
  renderOCCountryByName,
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

app.get('/region/north_america', renderNACountries)
app.get('/region/north_america/:name', renderNACountryByName)

app.get('/region/central_america', renderCACountries)
app.get('/region/central_america/:name', renderCACountryByName)

app.get('/region/caribbean', renderCRCountries)
app.get('/region/caribbean/:name', renderCRCountryByName)

app.get('/region/south_america', renderSACountries)
app.get('/region/south_america/:name', renderSACountryByName)

app.get('/region/europe', renderEUCountries)
app.get('/region/europe/:name', renderEUCountryByName)

app.get('/region/middle_east', renderMECountries)
app.get('/region/middle_east/:name', renderMECountryByName)

app.get('/region/africa', renderAFCountries)
app.get('/region/africa/:name', renderAFCountryByName)

app.get('/region/asia', renderASCountries)
app.get('/region/asia/:name', renderASCountryByName)

app.get('/region/oceania', renderOCCountries)
app.get('/region/oceania/:name', renderOCCountryByName)

app.get('/api/countries/', getAllCountries)
app.get('/api/countries/:name', getCountryByName)
app.get('/api/region/:id', getCountryByRegionId)


app.get('*', errorFunction)

app.post('/api/countries', bodyParser.json(), addNewCountry)

app.listen(process.env.PORT || PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})