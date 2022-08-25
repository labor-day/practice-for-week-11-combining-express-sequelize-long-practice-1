'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Insects', [
      {name: 'Western Pygmy Butterfly', millimeters: 12},
      {name: 'Patu Digua Spider', millimeters: 13},
      {name: 'Scarlet Swarf Dragonfly', millimeters: 14}
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Insects', {
      name: ['Western Pygmy Butterfly','Patu Digua Spider','Scarlet Swarf Dragonfly']
    });
  }
};
