const express = require('express')
const error = require('./controllers/cont-data')
const PORT = 1400
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('*', function (req, res) {
  res.status(404).send('ERROR CODE 404 PAGE NOT FOUND');
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})