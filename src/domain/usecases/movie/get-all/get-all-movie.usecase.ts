import { Type } from '../../../../core/errors/result';
import { MovieNotFoundError } from '../../../errors/movie-not-found.error';
import { Movie } from '../../../models/movie';
import { MovieRepository } from '../../../repositories/movie-repositoty';
import { GetAllMovie } from './get-all-movie';

export class GetAllMovieUseCase implements GetAllMovie {
  constructor(private readonly repository: MovieRepository) {}

  async execute(): Promise<Type<Movie[]>> {
    const movies = await this.repository.getAll();
    if (movies.length === 0) {
      return new MovieNotFoundError();
    }
    return movies;
  }
}
