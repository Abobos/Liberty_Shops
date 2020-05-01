import Model from "../models";

import { InternalServerError } from "../exceptions";
import { logger } from "../utils";

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
      throw new InternalServerError(e);
    }
  }

  async findOne(column: string, condition: string) {
    try {
      const result = await this.user.select({
        column,
        condition,
      });
      return result[0];
    } catch (e) {
      throw new InternalServerError(e);
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
      throw new InternalServerError(e);
    }
  }
}

export default new UserRepository();
