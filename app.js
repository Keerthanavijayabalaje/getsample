const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.json({ info: 'Hello server is running' })
})
app.get('/Employee' , db.getEmployee)
app.get('/Universe',db.getUniverse)
app.get('/countries', db.getcountries)
app.get('/accounts', db.getaccounts)
app.listen(3000, () => {
  console.log(` running.`);
});
