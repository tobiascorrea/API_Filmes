import { Type } from '../../../../core/errors/result';
import { MovieNotFoundError } from '../../../errors/movie-not-found.error';
import { MovieUpdateError } from '../../../errors/movie-update.error';
import { Movie } from '../../../models/movie';
import { MovieRepository } from '../../../repositories/movie-repositoty';
import { UpdateMovie } from './update-movie';
import { UpdateMovieDto } from './update-movie.dto';

export class UpdateMovieUseCase implements UpdateMovie {
  constructor(private readonly repository: MovieRepository) {}

  async execute(movieId: string, dto: UpdateMovieDto): Promise<Type<Movie>> {
    const data = await this.repository.getById(movieId);
    if (!data) {
      return new MovieNotFoundError();
    }
    const newMovie = await this.repository.update(movieId, dto);
    if (!newMovie) {
      return new MovieUpdateError();
    }
    return newMovie;
  }
}
