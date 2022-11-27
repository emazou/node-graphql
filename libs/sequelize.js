const { Sequelize } = require('sequelize');

const { dbUser, dbPassword, dbHost, dbPort, dbName } = require('../config/config');


const setupModels = require('/../db/models');

const URI = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: false,
});

setupModels(sequelize);

module.exports = sequelize;