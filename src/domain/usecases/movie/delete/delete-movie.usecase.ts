import { Type } from '../../../../core/errors/result';
import { MovieNotFoundError } from '../../../errors/movie-not-found.error';
import { DeleteMovieError } from '../../../errors/movie-delete.error';
import { MovieRepository } from '../../../repositories/movie-repositoty';
import { DeleteMovie } from './delete-movie';

export class DeleteMovieUseCase implements DeleteMovie {
  constructor(private readonly repository: MovieRepository) {}

  async execute(movieId: string): Promise<Type<boolean>> {
    const movie = await this.repository.getById(movieId);
    if (!movie) {
      return new MovieNotFoundError();
    }
    await this.repository.delete(movieId);
    const data = await this.repository.getById(movieId);
    if (data) return new DeleteMovieError();
    return true;
  }
}
