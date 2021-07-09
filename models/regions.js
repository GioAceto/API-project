const Regions = (connection, Sequelize) => {
  return connection.define('regions', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    region: { type: Sequelize.STRING, allowNull: false }
  })
}

module.exports = Regions
