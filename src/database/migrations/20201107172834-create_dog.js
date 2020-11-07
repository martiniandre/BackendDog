'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('dogs',{
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      breed:{
        type:Sequelize.STRING,
        allowNull:false
      },
      age:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      location:{
        type:Sequelize.STRING,
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
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('dogs')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
