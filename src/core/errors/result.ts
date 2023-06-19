import { AplicationError } from './application-error';

type Result<T> = T | AplicationError;
export type Type<T> = Result<T>;

export function isError<T>(result: Result<T>): result is AplicationError {
  return result instanceof Error;
}

export function isSuccess<T>(result: Result<T>): result is T {
  return !isError(result);
}
