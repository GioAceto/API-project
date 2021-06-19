const RegionsCountries = (connection, Sequelize, Genres, Novels) => {
  return connection.define('regionsCountries', {
    regionsId: { type: Sequelize.INTEGER, references: { model: Regions, key: 'id' } },
    countriesId: { type: Sequelize.INTEGER, references: { model: Countries, key: 'id' } },
  })
}

module.exports = RegionsCountries
