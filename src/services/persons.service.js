const { models } = require("../libs/sequelizer");

class PersonService {
  constructor() {}

  async find() {
    const res = await models.Person.findAll();
    return res;
  }
  async findOne(id) {
    const res = await models.Person.findByPk(id);
    return res;
  }
  async create(data) {
    const res = await models.Person.create(data);
    return res;
  }
  async update(id, data) {
    const model = await models.Person.findByPk(id);
    const res = await model.update(data);
    return res;
  }
  async delete(id) {
    const model = await models.Person.findByPk(id);
    if (!model) {
      throw new Error("Person not found");
    }
    await model.destroy();
    return { delete: true };
  }
}

module.exports = PersonService;