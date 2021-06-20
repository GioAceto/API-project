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

  return res.render('countries', { countries })
}

const getNACountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'North America' }
    }]
  })

  return res.render('countries', { countries })
}

const getCACountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Central America' }
    }]
  })

  return res.render('countries', { countries })
}

const getCRCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Caribbean' }
    }]
  })

  return res.render('countries', { countries })
}

const getSACountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'South America' }
    }]
  })

  return res.render('countries', { countries })
}

const getEUCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Europe' }
    }]
  })

  return res.render('countries', { countries })
}

const getMECountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Middle_East' }
    }]
  })

  return res.render('countries', { countries })
}

const getAFCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Africa' }
    }]
  })

  return res.render('countries', { countries })
}

const getASCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Asia' }
    }]
  })

  return res.render('countries', { countries })
}

const getOCCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Oceania' }
    }]
  })

  return res.render('countries', { countries })
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