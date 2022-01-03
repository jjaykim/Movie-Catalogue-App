'use strict';
const { hash } = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      {
        firstName: 'Jay',
        lastName: 'Kim',
        password: await hash('movieApp!', 8),
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    return;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', [
      {
        firstName: 'Jay',
        lastName: 'Kim',
        password: await hash('movieApp!', 8),
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
};
