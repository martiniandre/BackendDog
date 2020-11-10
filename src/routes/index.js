const express = require('express');
const routes = express.Router();

const UserRoutes = require('./user.routes')
const groupRoute = require('./group.routes');
const DogRoute = require('./dog.routes')
const AuthRoute = require('./auth.routes')
const authMiddle = require('../services/auth')


routes.use('/user',UserRoutes)
routes.use('/dogs',DogRoute)
routes.use('/auth',AuthRoute)
routes.use(authMiddle);
routes.use('/group',groupRoute)




module.exports = routes;