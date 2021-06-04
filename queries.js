const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "sample.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "Sample",
  password: "sample2021",
  port: 5432
});
const getEmployee = (request, response) => {
  pool.query('SELECT * FROM Employee ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getcountries = (request, response) => {
  pool.query('SELECT * FROM countries ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getaccounts = (request, response) => {
  pool.query('SELECT * FROM accounts ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getUniverse = (request, response) => {
  pool.query('SELECT * FROM Universe ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports={
  getEmployee,
  getUniverse,
  getcountries,
  getaccounts
}
