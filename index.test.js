const faker = require('faker');
const { collection, record } = require('.');

// see, https://github.com/Marak/faker.js#setting-a-randomness-seed
faker.seed(1234567890);

describe('fakerStructure', () => {
  describe('.collection', () => {
    it('with faker functions', () => {
      const subject = collection({
        id: faker.random.number,
        firstName: faker.name.firstName,
        lastName: faker.name.lastName
      });

      expect(subject(3)).toMatchSnapshot();
    })

    it('with custom functions', () => {
      const subject = collection({
        name: () => `${faker.name.firstName()} ${faker.name.lastName()}`
      });

      expect(subject(3)).toMatchSnapshot();
    })
  })

  describe('.record', () => {
    it('with faker functions', () => {
      const subject = record(faker.random.number, {
        id: faker.random.number,
        firstName: faker.name.firstName,
        lastName: faker.name.lastName
      });

      expect(subject(3)).toMatchSnapshot();
    })

    it('with custom functions', () => {
      const subject = record(faker.random.number, {
        name: () => `${faker.name.firstName()} ${faker.name.lastName()}`
      });

      expect(subject(3)).toMatchSnapshot();
    })
  })
})
