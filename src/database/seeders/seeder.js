require('../../config/dotenv')();
require('../../config/sequelize');

const seedUser = require('./UserSeeder');

(async () => {
  try {
    await seedUser();
  } catch(err) { console.log(err) }
})();
