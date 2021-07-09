const RegionsCountries = (connection, Sequelize, Regions, Countries) => {
  return connection.define('regionsCountries', {
    regionId: { type: Sequelize.INTEGER, references: { model: Regions, key: 'id' } },
    countryId: { type: Sequelize.INTEGER, references: { model: Countries, key: 'id' } },
  })
}

module.exports = RegionsCountries
