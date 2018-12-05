const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/messages_controller.js')

const messageBaseUrl = '/api/messages';
const PORT = 3001;

const app = express();

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public/build'));


app.post(messageBaseUrl, controller.create)
app.get(messageBaseUrl, controller.read)
app.put(messageBaseUrl + '/:id', controller.update)
app.delete(messageBaseUrl + '/:id', controller.delete)

app.listen((PORT), ()=>{
    console.log(`Server is listening on port ${PORT}`)
})

