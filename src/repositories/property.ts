import Model from "../models";
import { InternalServerError } from "../exceptions";

class propertyRepository {
  public property: any;

  constructor() {
    this.property = new Model("users");
  }

  async create() {
    try {
      const result = await this.property.create({
        column: "first_name, last_name, email, password, phone_number, address",
        values:
          "'Blessing', 'Makaraba', 'blessingmakaraba@gmail.com', '898989898989', '08167672019', 'N0.9 10'"
      });
      return result;
    } catch (e) {
      throw new InternalServerError(e);
    }
  }

  async findOne() {
    try {
      const result = await this.property.selectOne({
        column: "*",
        condition: "id = 1"
      });
      return result;
    } catch (e) {
      throw new InternalServerError(e);
    }
  }

  async findAll() {
    try {
      const result = await this.property.findAll({});
      return result;
    } catch (e) {
      throw new InternalServerError(e);
    }
  }
}

const t = new propertyRepository();
t.findOne();
