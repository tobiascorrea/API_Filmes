import { CreateMovie } from '../../../domain/usecases/movie/create/create-movie';
import { CreateMovieUseCase } from '../../../domain/usecases/movie/create/create-movie.usecase';
import { createMovieRepositoryFactory } from '../repositories/movie-repository.factory';

export const createMovieUseCaseFactory = (): CreateMovie => {
  return new CreateMovieUseCase(createMovieRepositoryFactory());
};
