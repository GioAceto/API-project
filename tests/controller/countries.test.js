/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { afterEach, before, beforeEach, describe, it } = require('mocha')

const { allCountries, singleCountry, allCountriesByRegion } = require('../mocks/mocks-countries')
const { getAllCountries, getCountryByName, getCountryByRegionId, addNewCountry } = require('../../controllers/cont-countries')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - countries', () => {
  let sandbox
  let stubbedFindOne
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusSend
  let stubbedStatus

  before(() => {
    sandbox = sinon.createSandbox()

    stubbedFindOne = sandbox.stub(models.Countries, 'findOne')

    stubbedSend = sandbox.stub()
    stubbedSendStatus = sandbox.stub()
    stubbedStatusSend = sandbox.stub()
    stubbedStatus = sandbox.stub()

    response = {
      send: stubbedSend,
      sendStatus: stubbedSendStatus,
      status: stubbedStatus,
    }
  })

  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedStatusSend })
  })

  afterEach(() => {
    sandbox.reset()
  })

  describe('getAllCountries', () => {
    it('retrieves a list of countries from every region', async () => {
      const stubbedFindAll = sinon.stub(models.Countries, 'findAll').returns(allCountries)

      await getAllCountries({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(allCountries)
    })
  })

  describe('addNewCountry', () => {
    it('accepts new country details and saves them as a new country, returning the saved record with a 201 status', async () => {
      const request = { body: singleCountry }
      const stubbedCreate = sinon.stub(models.Countries, 'create').returns(singleCountry)

      await addNewCountry(request, response)

      expect(stubbedCreate).to.have.been.calledWith(singleCountry)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedStatusSend).to.have.been.calledWith(singleCountry)
    })
  })
})
