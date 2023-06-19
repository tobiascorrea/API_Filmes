import { CreateMovie } from '../../../domain/usecases/movie/create/create-movie';
import { CreateMovieUseCase } from '../../../domain/usecases/movie/create/create-movie.usecase';
import { GetAllMovie } from '../../../domain/usecases/movie/get-all/get-all-movie';
import { GetAllMovieUseCase } from '../../../domain/usecases/movie/get-all/get-all-movie.usecase';
import { createMovieRepositoryFactory } from '../repositories/movie-repository.factory';

export const getAllMovieUseCaseFactory = (): GetAllMovie => {
  return new GetAllMovieUseCase(createMovieRepositoryFactory());
};
