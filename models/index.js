const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const CountriesModel = require('./countries')
const LanguagesModel = require('./languages')
const RegionsModel = require('./regions')
const RegionsCountriesModel = require('./regionsCountries')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Languages = LanguagesModel(connection, Sequelize)
const Countries = CountriesModel(connection, Sequelize, Languages)
const Regions = RegionsModel(connection, Sequelize)
const RegionsCountries = RegionsCountriesModel(connection, Sequelize, Regions, Countries)

Languages.belongsTo(Countries)

Regions.belongsToMany(Countries, { through: RegionsCountries })
Countries.belongsToMany(Regions, { through: RegionsCountries })

module.exports = {
  Languages,
  Countries,
  Regions,
  RegionsCountries,
  Sequelize
}
