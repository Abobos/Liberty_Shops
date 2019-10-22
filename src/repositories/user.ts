import Model from "../models";

import { InternalServerError } from "../exceptions";

class UserRepository {
  public user: any;

  constructor() {
    this.user = new Model("users");
  }

  async create(column: string, values: string) {
    try {
      const result = await this.user.create({
        column,
        values
      });
      return result;
    } catch (e) {
      throw new InternalServerError(e);
    }
  }

  async findOne(column: string, condition: string) {
    try {
      const result = await this.user.selectOne({
        column,
        condition
      });
      return result[0];
    } catch (e) {
      throw new InternalServerError(e);
    }
  }

  async findAll() {
    try {
      const result = await this.user.findAll({});
      return result;
    } catch (e) {
      throw new InternalServerError(e);
    }
  }
}

export default new UserRepository();
