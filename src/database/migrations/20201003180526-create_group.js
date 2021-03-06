'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('groups',{
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.UUID, // I expected this set the column default
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      location:{
        type:Sequelize.STRING,
        allowNull:false
      },
      breeds:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      phone:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('groups')
  }
};
