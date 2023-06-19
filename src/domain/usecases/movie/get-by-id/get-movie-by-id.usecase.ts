import { Type } from '../../../../core/errors/result';
import { MovieNotFoundError } from '../../../errors/movie-not-found.error';
import { Movie } from '../../../models/movie';
import { MovieRepository } from '../../../repositories/movie-repositoty';
import { GetMovieById } from './get-movie-by-id';

export class GetMovieByIdUseCase implements GetMovieById {
  constructor(private readonly repository: MovieRepository) {}

  async execute(movieId: String): Promise<Type<Movie>> {
    const movie = await this.repository.getById(movieId);
    if (!movie) {
      return new MovieNotFoundError();
    }
    return movie!;
  }
}
