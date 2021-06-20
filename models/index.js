const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const CountriesModel = require('./countries')
const RegionsModel = require('./regions')
const RegionsCountriesModel = require('./regionsCountries')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Countries = CountriesModel(connection, Sequelize)
const Regions = RegionsModel(connection, Sequelize)
const RegionsCountries = RegionsCountriesModel(connection, Sequelize, Regions, Countries)

Regions.belongsToMany(Countries, { through: RegionsCountries })
Countries.belongsToMany(Regions, { through: RegionsCountries })

module.exports = {
  Countries,
  Regions,
  RegionsCountries,
  Sequelize
}
