import Model from "../models";

import { InternalServerError } from "../exceptions";

class UserRepository {
  public user: Model;

  constructor() {
    this.user = new Model("users");
  }

  async create(column: string, values: string) {
    try {
      const result = await this.user.insert({
        column,
        values,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  async findOne(column: string, condition: string) {
    try {
      const result = await this.user.select({
        column,
        condition,
      });

      return result.rows[0];
    } catch (e) {
      throw e;
    }
  }

  async findAll(column: string, condition: string) {
    try {
      const result = await this.user.select({
        column,
        condition,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }
}

export default new UserRepository();
