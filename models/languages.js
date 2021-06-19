const Languages = (connection, Sequelize) => {
  return connection.define('languages', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    language: { type: Sequelize.STRING, allowNull: false }
  })
}

module.exports = Languages
