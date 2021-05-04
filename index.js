const express = require('express')
const PORT = 1400
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.all('*'), (request, response) => {
  return request.sendStatus(404)
}

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})