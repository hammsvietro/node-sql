'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('adresses', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id:{//FOREIGN KEY
          type: Sequelize.INTEGER,
          allowNull: false,
          referencers: {model:'users', key: 'id'},//CREATING FOREIGN KEY
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        zipcode:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        number: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },

        
      
      });
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
