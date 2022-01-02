'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      {
        firstName: 'test',
        lastName: 'test',
        password: 'test',
        email: 'test@test.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    return;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', [
      {
        firstName: 'test',
        lastName: 'test',
        password: 'test',
        email: 'test@test.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
};
