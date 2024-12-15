const { faker } = require('@faker-js/faker');

const users = [];
for (let i = 0; i < 10; i++) {
  users.push({
    id: i + 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress()
  });
}

console.log(JSON.stringify(users, null, 2));
