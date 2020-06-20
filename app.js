
const express = require('express');
const app = express();
const bodypasrser = require('body-parser')

app.use(bodypasrser.urlencoded({extended : false}))
app.use(bodypasrser.json())

const api = require('./routes/api')

app.use('/usuario', api)

module.exports = app

