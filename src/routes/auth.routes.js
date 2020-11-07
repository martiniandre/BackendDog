const express = require('express')

const AuthController = require('../controller/AuthController')

const authRoute = express.Router()

authRoute.post('/',AuthController.auth)

module.exports = authRoute