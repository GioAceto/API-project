const express = require('express')
const showdata = require('./showdata')

const PORT = 1400

const app = express()

app.set('view engine', 'pug')

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/movies...`) // eslint-disable-line no-console
})