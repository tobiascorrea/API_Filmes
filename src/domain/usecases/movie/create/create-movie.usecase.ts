import { Type } from '../../../../core/errors/result';
import { MoviAlreadyExistError } from '../../../errors/movie-already-exist.error';
import { Movie } from '../../../models/movie';
import { MovieRepository } from '../../../repositories/movie-repositoty';
import { CreateMovie } from './create-movie';
import { CreateMovieDto } from './create-movie.dto';

export class CreateMovieUseCase implements CreateMovie {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(dto: CreateMovieDto): Promise<Type<Movie>> {
    const movie = await this.movieRepository.getByTitle(dto.title);
    if (movie) {
      return new MoviAlreadyExistError(dto.title);
    }
    return this.movieRepository.create(dto);
  }
}
