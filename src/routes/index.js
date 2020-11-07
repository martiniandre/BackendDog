const express = require('express');
const routes = express.Router();

const UserRoutes = require('./user.routes')
const groupRoute = require('./group.routes');
const DogRoute = require('./dog.routes')

routes.use('/user',UserRoutes)
routes.use('/group',groupRoute)
routes.use('/dogs',DogRoute)




module.exports = routes;