const express = require('express');
const routes = express.Router();

const UserRoutes = require('./user.routes')
const groupRoute = require('./group.routes');

routes.use('/user',UserRoutes)
routes.use('/group',groupRoute)




module.exports = routes;