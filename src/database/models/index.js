const { Person, PersonSchema } = require("./persons.models");

function setUpModels(sequelize) {
  Person.init(PersonSchema, Person.config(sequelize));
}

module.exports = setUpModels;
