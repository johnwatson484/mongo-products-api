const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@backenddb.3o5rn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`)
  .then(() => console.log('Connected!'))

const app = express()

app.get('/', function (req, res) {
  res.send('Hello from Node API')
})

app.listen(3000)
