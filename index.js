const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/', function (req, res) {
  res.send('Hello from Node API')
})

mongoose.connect(`mongodb+srv://${ process.env.MONGO_USERNAME }:${ process.env.MONGO_PASSWORD }@backenddb.3o5rn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })


