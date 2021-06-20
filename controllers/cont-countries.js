const models = require('../models')

const errorFunction = (req, res) => {
  res.status(404).send('ERROR CODE 404 PAGE NOT FOUND');
};

const getMain = (req, res) => {
  res.render('index')
}

const getAllCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [
      {
        model: models.Regions
      }
    ]
  })

  return res.send(countries)
}

const getNACountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [
      {
        model: models.Regions
      }
    ]
  })

  return res.send(countries)
}



module.exports = {
  errorFunction,
  getMain,
  getAllCountries,
  getNACountries
}