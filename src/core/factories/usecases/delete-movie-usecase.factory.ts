import { DeleteMovie } from '../../../domain/usecases/movie/delete/delete-movie';
import { DeleteMovieUseCase } from '../../../domain/usecases/movie/delete/delete-movie.usecase';
import { createMovieRepositoryFactory } from '../repositories/movie-repository.factory';

export const deleteMovieUseCaseFactory = (): DeleteMovie => {
  return new DeleteMovieUseCase(createMovieRepositoryFactory());
};
