const express = require('express')

const GroupController = require('../controller/GroupController')

const groupRoute = express.Router()

groupRoute.get('/',GroupController.index)
groupRoute.post('/',GroupController.store)
groupRoute.put('/:id',GroupController.update)

module.exports = groupRoute;