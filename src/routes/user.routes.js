const express = require('express')

const UserController = require('../controller/UserController')

const userRoute = express.Router()

userRoute.get('/',UserController.index)
userRoute.post('/',UserController.store)
userRoute.put('/:id',UserController.update)

module.exports = userRoute