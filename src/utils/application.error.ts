export default class ApplicationError extends Error {
  public code: number;

  public name: string;

  constructor(message?: string, code?: number) {
    super(message);

    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = code || 500;
  }

  get status() {
    return this.code;
  }
}
