'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_country', 'name_vn', {
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_country', 'name_vn');
  }
};