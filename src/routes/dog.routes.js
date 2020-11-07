const express = require('express')

const DogController = require('../controller/DogController')

const DogRoute = express.Router()

DogRoute.get('/',DogController.index)
DogRoute.post('/',DogController.store)
DogRoute.put('/:id',DogController.update)
DogRoute.delete('/:id',DogController.delete)

module.exports = DogRoute