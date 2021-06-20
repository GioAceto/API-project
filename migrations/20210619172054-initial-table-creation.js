'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('languages', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      language: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('regions', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      region: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('countries', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      capital: { type: Sequelize.STRING },
      city: { type: Sequelize.STRING },
      area: { type: Sequelize.STRING },
      population: { type: Sequelize.STRING },
      gdp: { type: Sequelize.STRING },
      export: { type: Sequelize.STRING },
      currency: { type: Sequelize.STRING },
      leader: { type: Sequelize.STRING },
      languageId: { type: Sequelize.INTEGER, references: { model: 'languages', key: 'id' } },
      flag: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })

    return queryInterface.createTable('regionsCountries', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      regionId: { type: Sequelize.INTEGER },
      countryId: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface) => {

    await queryInterface.dropTable('languages')

    await queryInterface.dropTable('regions')

    await queryInterface.dropTable('countries')

    return queryInterface.dropTable('regionsCountries')
  }
}
