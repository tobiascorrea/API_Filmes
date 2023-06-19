import { UpdateMovieController } from '../../../infrastructure/http/controllers/movie/update-movie.controller';
import { HttpController } from '../../../infrastructure/protocols/http-controller';
import { updateMovieUseCaseFactory } from '../usecases/update-movie-usecase.factory';

export const updateMovieControllerFactory = (): HttpController => {
  return new UpdateMovieController(updateMovieUseCaseFactory());
};
