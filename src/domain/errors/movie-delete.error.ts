import { AplicationError } from '../../core/errors/application-error';

export class DeleteMovieError extends AplicationError {
  constructor() {
    super(202, 'Não foi possível deletar o filme!');
  }
}
