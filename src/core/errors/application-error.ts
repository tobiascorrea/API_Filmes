export type ApiErrorResponse = {
  error: ApiErrorParams;
};

export type ApiErrorParams = {
  message: string;
};

export abstract class AplicationError extends Error {
  constructor(readonly statusCode: number, readonly message = 'unexpected error') {
    super(message);
  }

  public serializeError(): ApiErrorResponse {
    return {
      error: {
        message: this.message,
      },
    };
  }
}
