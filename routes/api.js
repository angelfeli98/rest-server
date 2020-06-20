const controllers = require('../controllers/api')
const express = require('express')

const api = express.Router(); 


api.get('/getUser/:id', controllers.getUser)
api.post('/saveUser', controllers.saveUser)
api.put('/', controllers.saludar)
api.delete('/', controllers.saludar)

module.exports = api