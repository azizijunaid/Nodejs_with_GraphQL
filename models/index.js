const config = require('../config/config');
const Sequelize = require('sequelize');
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const basename = path.basename(__filename);

const db = {};

let sequelize;

sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    port: config.development.port,
    dialect: config.development.dialect,
    pool: { max: 5, min: 1, acquire: 30000, idle: 10000 },
    dialectOptions: {
      // ssl: {
      //     require: false,
      //     rejectUnauthorized: false
      // }
    },
  }
);


try {
    sequelize.authenticate();
    console.log(chalk.green.bgBlackBright.bold('Connection has been established successfully ❤️.'));

} catch (error) {
    console.error(chalk.red.bgBlackBright.bold('Unable to connect to the database:'), error);
}


fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(0, -3) !== '.js');

}).forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
    // console.log(db)

});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

(async () => {
  try {
    // await sequelize.sync({ force: true });
    // await db.book_author.drop();
    // await db.Book.drop();
  } catch (error) {
    console.log("🚀 ~ file: index.js:60 ~ error", error)
    
  }
  // Code here
})();
// db.Book.sequelize.sync();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

