const express = require('express')
const bodyParser = require('body-parser')
const countries = require('./countries')
const { errorFunction,
  getMain,
  getAllCountries,
  getNACountries,
  getCACountries,
  getCRCountries,
  getSACountries,
  getEUCountries,
  getMECountries,
  getAFCountries,
  getASCountries,
  getOCCountries,
  getCountryByName,
  getNACountryByName } = require('./controllers/cont-countries')

const PORT = 1400
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', getMain)

app.get('/countries/', getAllCountries)
app.get('/countries/north_america', getNACountries)
app.get('/countries/central_america', getCACountries)
app.get('/countries/caribbean', getCRCountries)
app.get('/countries/south_america', getSACountries)
app.get('/countries/europe', getEUCountries)
app.get('/countries/middle_east', getMECountries)
app.get('/countries/africa', getAFCountries)
app.get('/countries/asia', getASCountries)
app.get('/countries/oceania', getOCCountries)

app.get('/countries/:name', getCountryByName)
app.get('/countries/north_america/:name', getNACountryByName)

app.get('*', errorFunction)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})