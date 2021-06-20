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
    include: [{
      model: models.Regions,
      where: { region: 'North America' }
    }]
  })

  return res.send(countries)
}

const getCACountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Central America' }
    }]
  })

  return res.send(countries)
}

const getCRCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Caribbean' }
    }]
  })

  return res.send(countries)
}

const getSACountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'South America' }
    }]
  })

  return res.send(countries)
}

const getEUCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Europe' }
    }]
  })

  return res.send(countries)
}

const getMECountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Middle_East' }
    }]
  })

  return res.send(countries)
}

const getAFCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Africa' }
    }]
  })

  return res.send(countries)
}

const getASCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Asia' }
    }]
  })

  return res.send(countries)
}

const getOCCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Oceania' }
    }]
  })

  return res.send(countries)
}

module.exports = {
  errorFunction,
  getMain,
  getAllCountries,
  getNACountries,
  getCACountries,
  getCRCountries,
  getSACountries,
  getEUCountries,
  getMECountries,
  getAFCountries,
  getASCountries,
  getOCCountries
}