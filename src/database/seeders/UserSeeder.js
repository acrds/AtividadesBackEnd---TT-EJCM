const User = require("../../models/User");
const faker = require('faker-br');

 const seedUser = async function () {
   try {
     await User.sync({ force: true });
     const users = [];

     for (let i = 0; i < 12; i++) {

      let user = await User.create({
        username: faker.internet.userName(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        idade: faker.internet.idade(),
        password: faker.internet.password(),
        createdAt: new Date(),
        updatedAt: new Date()
      });

    }

  } catch (err) { console.log(err +'!'); }
}

module.exports = seedUser;
