import { GetMovieById } from '../../../domain/usecases/movie/get-by-id/get-movie-by-id';
import { GetMovieByIdUseCase } from '../../../domain/usecases/movie/get-by-id/get-movie-by-id.usecase';
import { createMovieRepositoryFactory } from '../repositories/movie-repository.factory';

export const getMovieByIdUseCaseFactory = (): GetMovieById => {
  return new GetMovieByIdUseCase(createMovieRepositoryFactory());
};
