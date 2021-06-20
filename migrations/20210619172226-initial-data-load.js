'use strict';

module.exports = {
  up: async (queryInterface) => {

    await queryInterface.bulkInsert('regions', [
      { region: 'North America' },
      { region: 'Central America' },
      { region: 'Caribbean' },
      { region: 'South America' },
      { region: 'Europe' },
      { region: 'Africa' },
      { region: 'Middle East' },
      { region: 'Asia' },
      { region: 'Oceania' }
    ])

    await queryInterface.bulkInsert('countries', [

      {
        name: 'The United States of America',
        capital: 'Washington DC',
        capital: 'Washington DC',
        city: 'New York City',
        area: '3,677,649',
        population: '328.2M',
        gdp: '21.43T',
        export: 'Refined petroleum',
        currency: 'US dollar',
        leader: 'Joseph Biden',
        language: 'English',
        flag: 'us-flag.gif'
      },
      {
        name: 'Canada',
        capital: 'Ottawa',
        city: 'Toronto',
        area: '3,855,100',
        population: '37.59M',
        gdp: '1.74T',
        export: 'Crude petroleum',
        currency: 'Canadian dollar',
        leader: 'Justin Trudeau',
        language: 'English',
        flag: 'ca-flag.gif'
      },
      {
        name: 'Mexico',
        capital: 'Mexico City',
        city: 'Mexico City',
        area: '761,606',
        population: '127.6M',
        gdp: '1.27T',
        export: 'Automobiles',
        currency: 'Mexican peso',
        leader: 'Andrés Manuel López Obrador',
        language: 'Spanish',
        flag: 'mx-flag.gif'
      },
      {
        name: 'Belize',
        capital: 'Belmopan',
        city: 'Belize City',
        area: '8,867',
        population: '390,353K',
        gdp: '1.88B',
        export: 'Raw sugar',
        currency: 'Belize dollar',
        leader: 'Johnny Briceño',
        language: 'English',
        flag: 'bh-flag.gif'
      },
      {
        name: 'Costa Rica',
        capital: 'San José',
        city: 'San José',
        area: '19,730',
        population: '5.05M',
        gdp: '61.8B',
        export: 'Medical instruments',
        currency: 'Costa Rican colón',
        leader: 'Carlos Alvarado Quesada',
        language: 'Spanish',
        flag: 'cs-flag.gif'
      },
      {
        name: 'El Salvador',
        capital: 'San Salvador',
        city: 'San Salvador',
        area: '8,124',
        population: '6.45M',
        gdp: '27.02B',
        export: 'Clothing',
        currency: 'Salvadoran colón',
        leader: 'Carlos Alvarado Quesada',
        language: 'Spanish',
        flag: 'es-flag.gif'
      },
      {
        name: 'Guatemala',
        capital: 'Guatemala City',
        city: 'Guatemala City',
        area: '42,042',
        population: '16.6M',
        gdp: '76.71B',
        export: 'Bananas',
        currency: 'Guatemalan quetzal',
        leader: 'Alejandro Giammattei',
        language: 'Spanish',
        flag: 'gt-flag.gif'
      },
      {
        name: 'Honduras',
        capital: 'Tegucigalpa',
        city: 'Tegucigalpa',
        area: '43,433',
        population: '9.74M',
        gdp: '25.1B',
        export: 'Clothing',
        currency: 'Honduran lempira',
        leader: 'Juan Orlando Hernández',
        language: 'Spanish',
        flag: 'ho-flag.gif'
      },
      {
        name: 'Nicaragua',
        capital: 'Managua',
        city: 'Managua',
        area: '50,336',
        population: '6.54M',
        gdp: '12.52B',
        export: 'Clothing',
        currency: 'Nicaraguan córdoba',
        leader: 'Daniel Ortega',
        language: 'Spanish',
        flag: 'nu-flag.gif'
      },
      {
        name: 'Panama',
        capital: 'Panama City',
        city: 'Panama City',
        area: '29,157',
        population: '4.24M',
        gdp: '66.8B',
        export: 'Refined petroleum',
        currency: 'Panamanian balboa, US dollar',
        leader: 'Laurentino Cortizo',
        language: 'Spanish',
        flag: 'pm-flag.gif'
      },
      {
        name: 'Antigua and Barbuda',
        capital: 'Saint John\'s',
        city: 'Saint John\'s',
        area: '108.5',
        population: '80,161',
        gdp: '1.66B',
        export: 'Passenger and cargo ships',
        currency: 'Eastern Caribbean dollar',
        leader: 'Gaston Browne',
        language: 'English',
        flag: 'ac-flag.gif'
      },
      {
        name: 'The Bahamas',
        capital: 'Nassau',
        city: 'Nassau',
        area: '5,358',
        population: '389,482',
        gdp: '13.58B',
        export: 'Passenger and cargo ships',
        currency: 'Bahamian dollar',
        leader: 'Hubert Minnis',
        language: 'English',
        flag: 'bf-flag.gif'
      },
      {
        name: 'Barbados',
        capital: 'Bridgetown',
        city: 'Bridgetown',
        area: '166.4',
        population: 'Example',
        gdp: 'Example',
        export: 'Hard Liquor',
        currency: 'Barbadian dollar',
        leader: 'Mia Mottley',
        language: 'English',
        flag: 'bb-flag.gif'
      },
      {
        name: 'Dominican Republic',
        capital: 'Santo Domingo',
        city: 'Santo Domingo',
        area: '18,704',
        population: '10.74M',
        gdp: '88.94B',
        export: 'Gold',
        currency: 'Dominican peso',
        leader: 'Luis Abinader',
        language: 'Spanish',
        flag: 'dr-flag.gif'
      },
      {
        name: 'Haiti',
        capital: 'Port-au-Prince',
        city: 'Port-au-Prince',
        area: '10,714',
        population: '11.26M',
        gdp: '14.33B',
        export: 'Clothing',
        currency: 'Haitian gourde',
        leader: 'Jovenel Moïse',
        language: 'French',
        flag: 'ha-flag.gif'
      },
      {
        name: 'Cuba',
        capital: 'Example',
        city: 'Havana',
        area: '42,426',
        population: '11.33M',
        gdp: '100B',
        export: 'Rolled tobacco',
        currency: 'Cuban peso',
        leader: 'Miguel Díaz-Canel',
        language: 'Spanish',
        flag: 'cu-flag.gif'
      },
      {
        name: 'Dominica',
        capital: 'Roseau',
        city: 'Roseau',
        area: '290',
        population: '71,808',
        gdp: 'E582.4M',
        export: 'Medical instruments',
        currency: 'Eastern Caribbean dollar',
        leader: 'Charles Savarin',
        language: 'English',
        flag: 'do-flag.gif'
      },
      {
        name: 'Jamaica',
        capital: 'Kingston',
        city: 'Kingston',
        area: '4,244',
        population: '2.94M',
        gdp: '16.46B',
        export: 'Aluminum oxide',
        currency: 'Jamaican dollar',
        leader: 'Andrew Holness',
        language: 'English',
        flag: 'jm-flag.gif'
      },
      {
        name: 'Grenada',
        capital: 'Saint George\'s',
        city: 'Saint George\'s',
        area: '134.6',
        population: '112,003',
        gdp: '1.21B',
        export: 'Fish',
        currency: 'Eastern Caribbean dollar',
        leader: 'Keith Mitchell',
        language: 'English',
        flag: 'gj-flag.gif'
      },
      {
        name: 'Trinidad and Tobago',
        capital: 'Port of Spain',
        city: 'Chaguanas',
        area: '1,981',
        population: '1.39M',
        gdp: '24.27B',
        export: 'Petroleum gas',
        currency: 'Trinidad and Tobago dollar',
        leader: 'Paula-Mae Weekes',
        language: 'English',
        flag: 'td-flag.gif'
      },
      {
        name: 'Saint Kitts and Nevis',
        capital: 'Basseterre',
        city: 'Basseterre',
        area: '100.8',
        population: '52,834',
        gdp: '1.05B',
        export: 'Low-voltage protection equipment',
        currency: 'Eastern Caribbean dollar',
        leader: 'Timothy Sylvester Harris',
        language: 'English',
        flag: 'sc-flag.gif'
      },
      {
        name: 'Saint Lucia',
        capital: 'Castries',
        city: 'Castries',
        area: '238.2',
        population: '182,790',
        gdp: '2.12B',
        export: 'Crude petroleum',
        currency: 'Eastern Caribbean dollar',
        leader: 'Allen Michael Chastanet',
        language: 'English',
        flag: 'st-flag.gif'
      },
      {
        name: 'Saint Vincent and the Grenadines',
        capital: 'Kingstown',
        city: 'Kingstown',
        area: '150.2',
        population: '110,589',
        gdp: '824.7M',
        export: 'Petroleum gas',
        currency: 'Eastern Caribbean dollar',
        leader: 'Ralph Everard Gonsalves',
        language: 'English',
        flag: 'vc-flag.gif'
      },
      {
        name: 'Argentina',
        capital: 'Buenos Aires',
        city: 'Buenos Aires',
        area: '1,073,500',
        population: '44.94M',
        gdp: '445.4B',
        export: 'Soybean meal',
        currency: 'Argentine peso',
        leader: 'Alberto Fernández',
        language: 'Spanish',
        flag: 'ar-flag.gif'
      },
      {
        name: 'Bolivia',
        capital: 'La Paz, Sucre',
        city: 'Santa Cruz de la Sierra',
        area: '424,164',
        population: '11.51M',
        gdp: '40.9B',
        export: 'Petroleum gas',
        currency: 'Bolivian boliviano',
        leader: 'Luis Arce',
        language: 'Spanish',
        flag: 'bl-flag.gif'
      },
      {
        name: 'Brazil',
        capital: 'Brasilia',
        city: 'São Paulo',
        area: '3,287,956',
        population: '211M',
        gdp: '1.84T',
        export: 'Soybeans',
        currency: 'Brazilian real',
        leader: 'Jair Bolsonaro',
        language: 'Portuguese',
        flag: 'br-flag.gif'
      },
      {
        name: 'Chile',
        capital: 'Santiago',
        city: 'Santiago',
        area: '291,933',
        population: '18.95M',
        gdp: '282.3B',
        export: 'Copper ore',
        currency: 'Chilean peso',
        leader: 'Sebastián Piñera',
        language: 'Spanish',
        flag: 'ci-flag.gif'
      },
      {
        name: 'Colombia',
        capital: 'Bogotá',
        city: 'Bogotá',
        area: '440,831',
        population: '50.34M',
        gdp: '323.6B',
        export: 'Crude petroleum',
        currency: 'Colombian peso',
        leader: 'Iván Duque Márquez',
        language: 'Spanish',
        flag: 'co-flag.gif'
      },
      {
        name: 'Ecuador',
        capital: 'Quito',
        city: 'Guayaquil',
        area: '106,889',
        population: '17.37M',
        gdp: '107.4B',
        export: 'Crude petroleum',
        currency: 'US dollar',
        leader: 'Lenín Moreno',
        language: 'Spanish',
        flag: 'ec-flag.gif'
      },
      {
        name: 'Guyana',
        capital: 'Georgetown',
        city: 'Georgetown',
        area: '83,000',
        population: '782,766',
        gdp: '5.17B',
        export: 'Special purpose ships',
        currency: 'Guyanese dollar',
        leader: 'Irfaan Ali',
        language: 'English',
        flag: 'gy-flag.gif'
      },
      {
        name: 'Paraguay',
        capital: 'Asunción',
        city: 'Asunción',
        area: '157,048',
        population: '7.04M',
        gdp: '38.15B',
        export: 'Soybeans',
        currency: 'Paraguayan guaraní',
        leader: 'Mario Abdo Benítez',
        language: 'Guaraní',
        flag: 'pa-flag.gif'
      },
      {
        name: 'Peru',
        capital: 'Lima',
        city: 'Lima',
        area: '496,225',
        population: '32.51M',
        gdp: '226.8B',
        export: 'Copper ore',
        currency: 'Nuevo sol',
        leader: 'Francisco Sagasti',
        language: 'Spanish',
        flag: 'pe-flag.gif'
      },
      {
        name: 'Suriname',
        capital: 'Paramaribo',
        city: 'Paramaribo',
        area: '63,250',
        population: '581,363',
        gdp: '3.69B',
        export: 'Gold',
        currency: 'Surinamese dollar',
        leader: 'Chan Santokhi',
        language: 'Dutch',
        flag: 'ns-flag.gif'
      },
      {
        name: 'Uruguay',
        capital: 'Montevideo',
        city: 'Montevideo',
        area: '68,037',
        population: '3.46M',
        gdp: '56.05B',
        export: 'Wood pulp',
        currency: 'Uruguayan peso',
        leader: 'Luis Lacalle Pou',
        language: 'Spanish',
        flag: 'uy-flag.gif'
      },
      {
        name: 'Venezuela',
        capital: 'Caracas',
        city: 'Caracas',
        area: '353,841',
        population: '28.52M',
        gdp: '482.4B',
        export: 'Crude petroleum',
        currency: 'Bolívar soberano',
        leader: 'Nicolás Maduro, Juan Guaidó',
        language: 'Spanish',
        flag: 've-flag.gif'
      },
    ])

    return queryInterface.bulkInsert('regionsCountries', [
      { regionId: 1, countryId: 1 },
      { regionId: 1, countryId: 2 },
      { regionId: 1, countryId: 3 },
      { regionId: 2, countryId: 4 },
      { regionId: 3, countryId: 4 },
      { regionId: 2, countryId: 5 },
      { regionId: 2, countryId: 6 },
      { regionId: 2, countryId: 7 },
      { regionId: 2, countryId: 8 },
      { regionId: 2, countryId: 9 },
      { regionId: 2, countryId: 10 },
      { regionId: 3, countryId: 11 },
      { regionId: 3, countryId: 12 },
      { regionId: 3, countryId: 13 },
      { regionId: 3, countryId: 14 },
      { regionId: 3, countryId: 15 },
      { regionId: 3, countryId: 16 },
      { regionId: 3, countryId: 17 },
      { regionId: 3, countryId: 18 },
      { regionId: 3, countryId: 19 },
      { regionId: 3, countryId: 20 },
      { regionId: 3, countryId: 21 },
      { regionId: 3, countryId: 22 },
      { regionId: 3, countryId: 23 },
      { regionId: 4, countryId: 24 },
      { regionId: 4, countryId: 25 },
      { regionId: 4, countryId: 26 },
      { regionId: 4, countryId: 27 },
      { regionId: 3, countryId: 28 },
      { regionId: 4, countryId: 28 },
      { regionId: 4, countryId: 29 },
      { regionId: 3, countryId: 30 },
      { regionId: 4, countryId: 30 },
      { regionId: 4, countryId: 31 },
      { regionId: 4, countryId: 32 },
      { regionId: 3, countryId: 33 },
      { regionId: 4, countryId: 33 },
      { regionId: 4, countryId: 34 },
      { regionId: 3, countryId: 35 },
      { regionId: 4, countryId: 35 },

    ])
  },

  down: async (queryInterface) => {

    await queryInterface.bulkDelete('regions')

    await queryInterface.bulkDelete('countries')

    return queryInterface.bulkDelete('regionsCountries')
  }
}
