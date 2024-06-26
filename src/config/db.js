const paths = require('../utils/paths.js')

const dbConfig = require(paths.configPaths.dbconfig);

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.')
})
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = sequelize
