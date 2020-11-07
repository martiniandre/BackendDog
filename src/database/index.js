const Sequelize = require('sequelize')
const dbConfig= require('../config/database')

const User = require('../models/User')
const Group = require('../models/Group')
const Dog = require('../models/Dog')

const connection = new Sequelize(dbConfig)

User.init(connection)
Group.init(connection)
Dog.init(connection)

module.exports = connection;