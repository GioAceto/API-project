const Countries = (connection, Sequelize, Authors) => {
  return connection.define('countries', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    capital: { type: Sequelize.STRING, allowNull: false },
    area: { type: Sequelize.STRING, allowNull: false },
    population: { type: Sequelize.STRING, allowNull: false },
    gdp: { type: Sequelize.STRING, allowNull: false },
    export: { type: Sequelize.STRING, allowNull: false },
    currency: { type: Sequelize.STRING, allowNull: false },
    leader: { type: Sequelize.STRING, allowNull: false },
    languagesId: { type: Sequelize.INTEGER, references: { model: Languages, key: 'id' } },
    flag: { type: Sequelize.STRING, allowNull: false }
  })
}

module.exports = Countries
