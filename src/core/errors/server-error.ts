import { AplicationError } from './application-error';

export class ServerError extends AplicationError {
  constructor(stack?: string) {
    super(500, stack ?? 'Internal server error');
  }
}
