import { AplicationError } from '../../core/errors/application-error';

export class MoviAlreadyExistError extends AplicationError {
  constructor(title: string) {
    super(400, `Filme ${title} já cadastrado!`);
  }
}
