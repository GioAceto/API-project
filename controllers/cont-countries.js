const models = require('../models')

const errorFunction = (req, res) => {
  res.status(404).send('ERROR CODE 404 PAGE NOT FOUND');
};

const getMain = (req, res) => {
  res.render('index')
}

const renderAllCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [
      {
        model: models.Regions
      }
    ]
  })

  return res.render('countries', { countries })
}

const getAllCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{ model: models.Regions }]
  })

  return res.send(countries)
}

const getCountryByName = async (req, res) => {
  const { name } = req.params

  const countries = await models.Countries.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ]
    },
    include: [{ model: models.Regions }]
  })

  return res.send(countries)

}


const getCountryByRegionId = async (req, res) => {
  const { id } = req.params
  const countries = await models.Countries.findAll({
    include: [
      {
        model: models.Regions,
        where: { id }
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

  return res.render('north_america', { countries })
}

const getCACountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Central America' }
    }]
  })

  return res.render('central_america', { countries })
}

const getCRCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Caribbean' }
    }]
  })

  return res.render('caribbean', { countries })
}

const getSACountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'South America' }
    }]
  })

  return res.render('south_america', { countries })
}

const getEUCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Europe' }
    }]
  })

  return res.render('europe', { countries })
}

const getMECountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Middle_East' }
    }]
  })

  return res.render('middle_east', { countries })
}

const getAFCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Africa' }
    }]
  })

  return res.render('africa', { countries })
}

const getASCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Asia' }
    }]
  })

  return res.render('asia', { countries })
}

const getOCCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Oceania' }
    }]
  })

  return res.render('oceania', { countries })
}

const renderCountryByName = async (req, res) => {
  const { name } = req.params

  const countries = await models.Countries.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ]
    },
    include: [{ model: models.Regions }]
  })

  return res.render('countries', { countries })

}

const getNACountryByName = async (req, res) => {
  const { name } = req.params

  const countries = await models.Countries.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ]
    },
    include: [{
      model: models.Regions,
      where: { region: 'North America' }
    }]
  })

  return res.render('north_america', { countries })

}

const getCACountryByName = async (req, res) => {
  const { name } = req.params

  const countries = await models.Countries.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ]
    },
    include: [{
      model: models.Regions,
      where: { region: 'Central America' }
    }]
  })

  return res.render('central_america', { countries })

}

const getCRCountryByName = async (req, res) => {
  const { name } = req.params

  const countries = await models.Countries.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ]
    },
    include: [{
      model: models.Regions,
      where: { region: 'Caribbean' }
    }]
  })

  return res.render('caribbean', { countries })

}

const getSACountryByName = async (req, res) => {
  const { name } = req.params

  const countries = await models.Countries.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ]
    },
    include: [{
      model: models.Regions,
      where: { region: 'South America' }
    }]
  })

  return res.render('south_america', { countries })

}

const getEUCountryByName = async (req, res) => {
  const { name } = req.params

  const countries = await models.Countries.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ]
    },
    include: [{
      model: models.Regions,
      where: { region: 'Europe' }
    }]
  })

  return res.render('europe', { countries })

}

const getMECountryByName = async (req, res) => {
  const { name } = req.params

  const countries = await models.Countries.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ]
    },
    include: [{
      model: models.Regions,
      where: { region: 'Middle East' }
    }]
  })

  return res.render('middle_east', { countries })

}

const getAFCountryByName = async (req, res) => {
  const { name } = req.params

  const countries = await models.Countries.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ]
    },
    include: [{
      model: models.Regions,
      where: { region: 'Africa' }
    }]
  })

  return res.render('africa', { countries })

}

const getASCountryByName = async (req, res) => {
  const { name } = req.params

  const countries = await models.Countries.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ]
    },
    include: [{
      model: models.Regions,
      where: { region: 'Asia' }
    }]
  })

  return res.render('asia', { countries })

}

const getOCCountryByName = async (req, res) => {
  const { name } = req.params

  const countries = await models.Countries.findAll({
    where: {
      [models.Sequelize.Op.or]: [
        { name: { [models.Sequelize.Op.like]: `%${name}%` } },
      ]
    },
    include: [{
      model: models.Regions,
      where: { region: 'Oceania' }
    }]
  })

  return res.render('oceania', { countries })

}

const Regions = models.Regions

const addNewEUCountry = async (req, res) => {
  const { name, capital, city, area, population, gdp, topExport, currency, leader, language, flag, regions } = req.body

  console.log(regions)

  if (!name || !capital || !city || !area || !population || !gdp || !topExport || !currency || !leader || !language || !flag || !regions) {
    return req.status(400).send('The following fields are required: name, region, capital, city, area, population, gdp, topExport, currency, leader, language, flag')
  }

  console.log({ ...req.body })

  const newCountry = await models.Countries.create(
    req.body,
    {
      include: [{ model: models.Regions }],
      validate: false
    })


  return res.status(201).send(newCountry)
}


module.exports = {
  errorFunction,
  getMain,
  renderAllCountries,
  getNACountries,
  getCACountries,
  getCRCountries,
  getSACountries,
  getEUCountries,
  getMECountries,
  getAFCountries,
  getASCountries,
  getOCCountries,
  renderCountryByName,
  getNACountryByName,
  getCACountryByName,
  getCRCountryByName,
  getSACountryByName,
  getEUCountryByName,
  getMECountryByName,
  getAFCountryByName,
  getASCountryByName,
  getOCCountryByName,
  addNewEUCountry,
  getAllCountries,
  getCountryByName,
  getCountryByRegionId
}