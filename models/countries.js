const Countries = (connection, Sequelize) => {
  return connection.define('countries', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    capital: { type: Sequelize.STRING, allowNull: false },
    city: { type: Sequelize.STRING },
    area: { type: Sequelize.STRING, allowNull: false },
    population: { type: Sequelize.STRING, allowNull: false },
    gdp: { type: Sequelize.STRING, allowNull: false },
    export: { type: Sequelize.STRING, allowNull: false },
    currency: { type: Sequelize.STRING, allowNull: false },
    leader: { type: Sequelize.STRING, allowNull: false },
    language: { type: Sequelize.STRING, allowNull: false },
    flag: { type: Sequelize.STRING, allowNull: false }
  })
}

module.exports = Countries
