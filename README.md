# Countries API

Note: API routes can be testd with an API tester such as Postman.

## Objective
The objective of this project was to create a REST API that returns information for all countries in the world, by their geographic region. There are 9 geographic regions used in this API. Each of which are given an ID # in the database:

1 - North America

2 - Central America

3 - Caribbean

4 - South America

5 - Europe

6 - Africa

7 - Middle East

8 - Asia

9 - Oceania


## Structure & Functionality
This API utilizes a MySQL database to store the country data, as well as a Pug frontend for the rendering.

The database contains a two data tables and a linking table. The application uses the Sequelize ORM to connect to the database and it is then parsed into JSON format.

The frontend of the application utilizes the Pug template-engine as well CSS for styling. All images used are stored in the public/images folder of the repo.

![Screenshot of countries api](public/images/countriesMap.jpg)

## API Documentation

The following HTTP methods are implemented: GET & POST.

#### GET METHOD (All)

http://localhost:1400/api/countries

GET - Returns a list in raw JSON of all countries and their information currently in the database in Alphabetical order.

            {
                "id": 148,
                "name": "Afghanistan",
                "capital": "Kabul",
                "city": "Kabul",
                "area": "252,071",
                "population": "38.04M",
                "gdp": "19.29B",
                "topExport": "Gold",
                "currency": "Afghan afghani",
                "leader": "Ashraf Ghani",
                "language": "Pashto",
                "flag": "af-flag.gif",
                "createdAt": "2021-10-01T18:47:37.000Z",
                "updatedAt": "2021-10-01T18:47:37.000Z",
                "regions": [
                    {
                        "id": 8,
                        "region": "Asia",
                        "createdAt": "2021-10-01T18:47:37.000Z",
                        "updatedAt": "2021-10-01T18:47:37.000Z",
                        "regionsCountries": {
                            "regionId": 8,
                            "countryId": 148,
                            "createdAt": "2021-10-01T18:47:37.000Z",
                            "updatedAt": "2021-10-01T18:47:37.000Z"
                        }
                    }
                ]
            },
            {
                "id": 65,
                "name": "Albania",
                "capital": "Tirana",
                "city": "Tirana",
                "area": "11,100",
                "population": "2.86M",
                "gdp": "15.28B",
                "topExport": "Leather footwear",
                "currency": "Albanian lek",
                "leader": "Ilir Meta",
                "language": "Albanian",
                "flag": "al-flag.gif",
                "createdAt": "2021-10-01T18:47:37.000Z",
                "updatedAt": "2021-10-01T18:47:37.000Z",
                "regions": [
                    {
                        "id": 5,
                        "region": "Europe",
                        "createdAt": "2021-10-01T18:47:37.000Z",
                        "updatedAt": "2021-10-01T18:47:37.000Z",
                        "regionsCountries": {
                            "regionId": 5,
                            "countryId": 65,
                            "createdAt": "2021-10-01T18:47:37.000Z",
                            "updatedAt": "2021-10-01T18:47:37.000Z"
                        }
                    }
                ]
            },
            ...

#### GET METHOD (By Country Name or Fuzzy Name Match)

http://localhost:1400/api/countries/Aus
    
GET - Returns a specific country or list of all countries and their information currently in the database by fuzzy match params in raw JSON.

        [
            {
                "id": 182,
                "name": "Australia",
                "capital": "Canberra",
                "city": "Sydney",
                "area": "2,969,907",
                "population": "25.36M",
                "gdp": "1.39T",
                "topExport": "Iron ore",
                "currency": "Australian dollar",
                "leader": "Scott Morrison",
                "language": "English",
                "flag": "as-flag.gif",
                "createdAt": "2021-10-01T18:47:37.000Z",
                "updatedAt": "2021-10-01T18:47:37.000Z",
                "regions": [
                    {
                        "id": 9,
                        "region": "Oceania",
                        "createdAt": "2021-10-01T18:47:37.000Z",
                        "updatedAt": "2021-10-01T18:47:37.000Z",
                        "regionsCountries": {
                            "regionId": 9,
                            "countryId": 182,
                            "createdAt": "2021-10-01T18:47:37.000Z",
                            "updatedAt": "2021-10-01T18:47:37.000Z"
                        }
                    }
                ]
            },
            {
                "id": 53,
                "name": "Austria",
                "capital": "Vienna",
                "city": "Vienna",
                "area": "32,386",
                "population": "8.85M",
                "gdp": "445.1B",
                "topExport": "Automobiles",
                "currency": "Euro",
                "leader": "Alexander Van der Bellen",
                "language": "German",
                "flag": "au-flag.gif",
                "createdAt": "2021-10-01T18:47:37.000Z",
                "updatedAt": "2021-10-01T18:47:37.000Z",
                "regions": [
                    {
                        "id": 5,
                        "region": "Europe",
                        "createdAt": "2021-10-01T18:47:37.000Z",
                        "updatedAt": "2021-10-01T18:47:37.000Z",
                        "regionsCountries": {
                            "regionId": 5,
                            "countryId": 53,
                            "createdAt": "2021-10-01T18:47:37.000Z",
                            "updatedAt": "2021-10-01T18:47:37.000Z"
                        }
                    }
                ]
            }
        ]

#### GET METHOD (By Region ID #)

http://localhost:1400/api/region/1
    
GET - Returns a list of countries in raw JSON by their region ID #.

        [
            {
                "id": 2,
                "name": "Canada",
                "capital": "Ottawa",
                "city": "Toronto",
                "area": "3,855,100",
                "population": "37.59M",
                "gdp": "1.74T",
                "topExport": "Crude petroleum",
                "currency": "Canadian dollar",
                "leader": "Justin Trudeau",
                "language": "English",
                "flag": "ca-flag.gif",
                "createdAt": "2021-10-01T18:47:37.000Z",
                "updatedAt": "2021-10-01T18:47:37.000Z",
                "regions": [
                    {
                        "id": 1,
                        "region": "North America",
                        "createdAt": "2021-10-01T18:47:37.000Z",
                        "updatedAt": "2021-10-01T18:47:37.000Z",
                        "regionsCountries": {
                            "regionId": 1,
                            "countryId": 2,
                            "createdAt": "2021-10-01T18:47:37.000Z",
                            "updatedAt": "2021-10-01T18:47:37.000Z"
                        }
                    }
                ]
            },
            {
                "id": 3,
                "name": "Mexico",
                "capital": "Mexico City",
                "city": "Mexico City",
                "area": "761,606",
                "population": "127.6M",
                "gdp": "1.27T",
                "topExport": "Automobiles",
                "currency": "Mexican peso",
                "leader": "Andrés Manuel López Obrador",
                "language": "Spanish",
                "flag": "mx-flag.gif",
                "createdAt": "2021-10-01T18:47:37.000Z",
                "updatedAt": "2021-10-01T18:47:37.000Z",
                "regions": [
                    {
                        "id": 1,
                        "region": "North America",
                        "createdAt": "2021-10-01T18:47:37.000Z",
                        "updatedAt": "2021-10-01T18:47:37.000Z",
                        "regionsCountries": {
                            "regionId": 1,
                            "countryId": 3,
                            "createdAt": "2021-10-01T18:47:37.000Z",
                            "updatedAt": "2021-10-01T18:47:37.000Z"
                        }
                    }
                ]
            },
            {
                "id": 1,
                "name": "The United States of America",
                "capital": "Washington DC",
                "city": "New York City",
                "area": "3,677,649",
                "population": "328.2M",
                "gdp": "21.43T",
                "topExport": "Refined petroleum",
                "currency": "US dollar",
                "leader": "Joseph Biden",
                "language": "English",
                "flag": "us-flag.gif",
                "createdAt": "2021-10-01T18:47:37.000Z",
                "updatedAt": "2021-10-01T18:47:37.000Z",
                "regions": [
                    {
                        "id": 1,
                        "region": "North America",
                        "createdAt": "2021-10-01T18:47:37.000Z",
                        "updatedAt": "2021-10-01T18:47:37.000Z",
                        "regionsCountries": {
                            "regionId": 1,
                            "countryId": 1,
                            "createdAt": "2021-10-01T18:47:37.000Z",
                            "updatedAt": "2021-10-01T18:47:37.000Z"
                        }
                    }
                ]
            }
        ]

#### POST METHOD

http://localhost:1400/api/countries

POST - Adds a new country to the database. The below format is used for POST method. All properties must be included.

        {
            "name": "New Country",
            "capital": "New Capital",
            "city": "Most Populous City",
            "area": "Area in Square Miles",
            "population": "500,000",
            "gdp": "100B",
            "topExport": "Top Export",
            "currency": "Currency",
            "leader": "Country leader",
            "language": "Most Spoken language",
            "flag": "File path to flag image",
            "regions": [{
                   "id": "1"
            }]
        }

## To View the Frontend

#### Main Route (Map Page)

http://localhost:1400/

#### View All Countries

http://localhost:1400/countries

#### View a Specific Country From All Countries with Fuzzy Match Params

http://localhost:1400/countries/tanzania

http://localhost:1400/countries/south

#### View All Countries From a Specific Region

http://localhost:1400/region/north_america

#### View a Specific Country From a Specific Region with Fuzzy Match Params

http://localhost:1400/region/north_america/canada

http://localhost:1400/region/north_america/ca
