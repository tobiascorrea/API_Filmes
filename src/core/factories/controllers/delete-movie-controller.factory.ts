import { DeleteMovieController } from '../../../infrastructure/http/controllers/movie/delete-movie.controller';
import { HttpController } from '../../../infrastructure/protocols/http-controller';
import { deleteMovieUseCaseFactory } from '../usecases/delete-movie-usecase.factory';

export const deleteMovieControllerFactory = (): HttpController => {
  return new DeleteMovieController(deleteMovieUseCaseFactory());
};
