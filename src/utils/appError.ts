export enum HTTPCODE {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  CONFLICT = 409,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_IDENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

interface ErrorArgs {
  name?: string;
  isOperational?: boolean;
  message: string;
  httpCode: HTTPCODE;
}

export class appError extends Error {
  public readonly name: string;
  public readonly httpCode: HTTPCODE;
  public readonly isOperational: boolean = true;
  constructor(args: ErrorArgs) {
    super(args.message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = args.name || "Error";
    this.httpCode = args.httpCode;

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}
