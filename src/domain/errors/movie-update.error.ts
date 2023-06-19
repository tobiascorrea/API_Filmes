import { AplicationError } from '../../core/errors/application-error';

export class MovieUpdateError extends AplicationError {
  constructor() {
    super(202, 'Não foi possível deletar o filme!');
  }
}
