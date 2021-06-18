const express = require('express')
const bodyParser = require('body-parser')
const countries = require('./countries')
const { errorFunction } = require('./controllers/cont-data')

const PORT = 1400
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/countries/', (req, res) => {
  res.render('countries', { countries })
})

app.get('/countries/north_america', (req, res) => {
  res.render('north_america', { countries })
})

app.get('/countries/central_america', (req, res) => {
  res.render('central_america', { countries })
})

app.get('/countries/caribbean', (req, res) => {
  res.render('caribbean', { countries })
})

app.get('/countries/south_america', (req, res) => {
  res.render('south_america', { countries })
})

app.get('/countries/europe', (req, res) => {
  res.render('europe', { countries })
})

app.get('/countries/africa', (req, res) => {
  res.render('africa', { countries })
})

app.get('/countries/middle_east', (req, res) => {
  res.render('middle_east', { countries })
})

app.get('/countries/asia', (req, res) => {
  res.render('asia', { countries })
})

app.get('/countries/oceania', (req, res) => {
  res.render('oceania', { countries })
})


app.get('*', errorFunction)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})