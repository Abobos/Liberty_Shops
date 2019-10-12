export class InternalServerError extends Error {
  public message: string;
  protected statusCode: number;

  constructor(protected messages: string, protected code: number = 500) {
    super(messages);
    this.message = messages;
    this.statusCode = code;
  }
}

export class AuthenticationError extends InternalServerError {
  constructor(message: string, code: number = 401) {
    super(message, code);
  }
}

export class ForbiddenError extends InternalServerError {
  constructor(message: string, code: number = 403) {
    super(message, code);
  }
}

export class NotFoundError extends InternalServerError {
  constructor(message: string, code: number = 404) {
    super(message, code);
  }
}

export class ConflictError extends InternalServerError {
  constructor(message: string, code: number = 409) {
    super(message, code);
  }
}
