import { GetAllMovieController } from '../../../infrastructure/http/controllers/movie/get-all-movie.controller';
import { HttpController } from '../../../infrastructure/protocols/http-controller';
import { getAllMovieUseCaseFactory } from '../usecases/get-all-movie-usecasse.factory';

export const getAllMovieControllerFactory = (): HttpController => {
  return new GetAllMovieController(getAllMovieUseCaseFactory());
};
