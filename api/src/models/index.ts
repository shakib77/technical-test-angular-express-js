const dbConfig = require('../config/dbConfig');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {
    Sequelize: undefined,
    sequelize: undefined,
    test: undefined
};

console.log('sequelize->', sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.test = require("./test.model")(sequelize, Sequelize);

module.exports = db;