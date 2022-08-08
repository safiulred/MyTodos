const dotenv = require('dotenv');
dotenv.config();
const db = require('./models');

module.exports = (callback) => {
  db.sequelize.sync({ alter: true })
    .then(() => console.log('Migration success'))
    .catch(error => console.log(error))
    .finally(() => callback());
}
