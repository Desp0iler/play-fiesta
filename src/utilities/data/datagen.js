const { faker } = require('@faker-js/faker');

exports.User = class User {
  constructor() {
    this.fullName = faker.name.fullName();
    this.email = faker.internet.email();
    this.currentAddress = faker.address.streetAddress();
    this.permAddress = faker.address.streetAddress();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.number('##########');
    this.subjects = faker.company.bs();
  }
};
