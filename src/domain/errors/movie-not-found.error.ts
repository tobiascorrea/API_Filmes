import { AplicationError } from '../../core/errors/application-error';

export class MovieNotFoundError extends AplicationError {
  constructor() {
    super(404, 'Nenhum filme encontrado!');
  }
}
