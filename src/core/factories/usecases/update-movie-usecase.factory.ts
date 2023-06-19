import { CreateMovie } from '../../../domain/usecases/movie/create/create-movie';
import { CreateMovieUseCase } from '../../../domain/usecases/movie/create/create-movie.usecase';
import { UpdateMovieUseCase } from '../../../domain/usecases/movie/update/update-movie.usecase';
import { createMovieRepositoryFactory } from '../repositories/movie-repository.factory';

export const updateMovieUseCaseFactory = (): UpdateMovieUseCase => {
  return new UpdateMovieUseCase(createMovieRepositoryFactory());
};
