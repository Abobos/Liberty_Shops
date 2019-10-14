import db from "../config/pool";
import {
  queryParamsI,
  queryParamsII,
  queryParamsIII,
  queryParamsIV
} from "../interfaces";

class Model {
  private resource: string;

  constructor(table: string) {
    this.resource = table;
  }

  async create(queryDetails: queryParamsII): Promise<any> {
    const queryStatement = `INSERT INTO ${this.resource} (${queryDetails.column}) 
                            VALUES (${queryDetails.values}) RETURNING *`;

    const { rows } = await db.query(queryStatement);
    return rows[0];
  }

  async selectOne(queryDetails: queryParamsI): Promise<any> {
    const queryStatement = `SELECT ${queryDetails.column} FROM ${this.resource}
                            WHERE ${queryDetails.condition}`;

    const result = await db.query(queryStatement);
    return result.rows;
  }

  async selectAll(queryDetails: queryParamsIII): Promise<any> {
    const queryStatement = `SELECT ${queryDetails.column} FROM ${this.resource}
                            WHERE ${queryDetails.condition} LIMIT ${queryDetails.limit} 
                            OFFSET ${queryDetails.offset} ORDER BY ${queryDetails.orderBy}`;

    const result = await db.query(queryStatement);
    return result;
  }

  async delete(queryDetails: queryParamsI): Promise<any> {
    const queryStatement = `DELETE FROM ${this.resource} WHERE ${queryDetails.condition}`;

    const result = await db.query(queryStatement);
    return result;
  }

  async update(queryDetails: queryParamsIV): Promise<any> {
    const queryStatement = `UPDATE ${this.resource} SET ${queryDetails.values} 
                            WHERE ${queryDetails.condition} RETURNING ${queryDetails.column}`;

    const { rows } = await db.query(queryStatement);
    return rows[0];
  }
}

export default Model;