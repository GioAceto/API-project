const models = require('../models')

const errorFunction = (req, res) => {
  res.status(404).send('ERROR CODE 404 PAGE NOT FOUND');
};

const getMain = (req, res) => {
  res.render('index')
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

const renderNACountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'North America' }
    }]
  })

  return res.render('north_america', { countries })
}

const renderCACountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Central America' }
    }]
  })

  return res.render('central_america', { countries })
}

const renderCRCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Caribbean' }
    }]
  })

  return res.render('caribbean', { countries })
}

const renderSACountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'South America' }
    }]
  })

  return res.render('south_america', { countries })
}

const renderEUCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Europe' }
    }]
  })

  return res.render('europe', { countries })
}

const renderMECountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Middle_East' }
    }]
  })

  return res.render('middle_east', { countries })
}

const renderAFCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Africa' }
    }]
  })

  return res.render('africa', { countries })
}

const renderASCountries = async (req, res) => {
  const countries = await models.Countries.findAll({
    include: [{
      model: models.Regions,
      where: { region: 'Asia' }
    }]
  })

  return res.render('asia', { countries })
}

const renderOCCountries = async (req, res) => {
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

const renderNACountryByName = async (req, res) => {
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

const renderCACountryByName = async (req, res) => {
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

const renderCRCountryByName = async (req, res) => {
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

const renderSACountryByName = async (req, res) => {
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

const renderEUCountryByName = async (req, res) => {
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

const renderMECountryByName = async (req, res) => {
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

const renderAFCountryByName = async (req, res) => {
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

const renderASCountryByName = async (req, res) => {
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

const renderOCCountryByName = async (req, res) => {
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

const addNewCountry = async (req, res) => {
  const {
    name,
    capital,
    city,
    area,
    population,
    gdp,
    topExport,
    currency,
    leader,
    language,
    flag,
    regions,
  } = req.body;
  if (
    !name ||
    !capital ||
    !city ||
    !area ||
    !population ||
    !gdp ||
    !topExport ||
    !currency ||
    !leader ||
    !language ||
    !flag ||
    !regions
  ) {
    return res
      .status(400)
      .send(
        "The following fields are required: name, region, capital, city, area, population, gdp, topExport, currency, leader, language, flag"
      );
  }

  const { regions: regionsData, ...countryData } = req.body;
  const newRegions = regionsData.map((region) => region.id);
  const newCountry = await models.Countries.create(countryData)
    .then(({ dataValues: { id: newCountryId } }) => {
      newRegions.forEach(async (region) => {
        const regionCountry = { regionId: region, countryId: newCountryId };
        await models.RegionsCountries.create(regionCountry)
          .then()
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
  return res.status(201).send(newCountry);
}

module.exports = {
  errorFunction,
  getMain,
  renderAllCountries,
  renderNACountries,
  renderCACountries,
  renderCRCountries,
  renderSACountries,
  renderEUCountries,
  renderMECountries,
  renderAFCountries,
  renderASCountries,
  renderOCCountries,
  renderCountryByName,
  renderNACountryByName,
  renderCACountryByName,
  renderCRCountryByName,
  renderSACountryByName,
  renderEUCountryByName,
  renderMECountryByName,
  renderAFCountryByName,
  renderASCountryByName,
  renderOCCountryByName,
  getAllCountries,
  getCountryByName,
  getCountryByRegionId,
  addNewCountry,
}