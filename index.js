const express = require('express')
const countries = require('./countries')
const { errorFunction } = require('./controllers/cont-data')

const PORT = 1400
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/north_america', (req, res) => {
  res.render('north-america', { countries })
})

app.get('*', errorFunction)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})