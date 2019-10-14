export class InternalServerError extends Error {
  public message: string;
  public statusCode: number;

  constructor(message: string, code: number = 500) {
    super(message);

    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.name = this.constructor.name;

    this.message = message;
    this.statusCode = code;
  }
}

export class AuthenticationError extends InternalServerError {
  constructor(message: string, code: number = 401) {
    super(message, code);

    Object.setPrototypeOf(this, AuthenticationError.prototype);
    this.name = this.constructor.name;
  }
}

export class ForbiddenError extends InternalServerError {
  constructor(message: string, code: number = 403) {
    super(message, code);

    Object.setPrototypeOf(this, ForbiddenError.prototype);
    this.name = this.constructor.name;
  }
}

export class NotFoundError extends InternalServerError {
  constructor(message: string, code: number = 404) {
    super(message, code);

    Object.setPrototypeOf(this, NotFoundError.prototype);
    this.name = this.constructor.name;
  }
}

export class ConflictError extends InternalServerError {
  constructor(message: string, code: number = 409) {
    super(message, code);

    Object.setPrototypeOf(this, ConflictError.prototype);
    this.name = this.constructor.name;
  }
}
