import { GetMovieByIdController } from '../../../infrastructure/http/controllers/movie/get-movie-by-id.controller';
import { HttpController } from '../../../infrastructure/protocols/http-controller';
import { getMovieByIdUseCaseFactory } from '../usecases/get-movie-by-id-usecase.factory';

export const getMovieByIdControllerFactory = (): HttpController => {
  return new GetMovieByIdController(getMovieByIdUseCaseFactory());
};
