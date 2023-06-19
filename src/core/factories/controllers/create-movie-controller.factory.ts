import { MovieRepository } from '../../../domain/repositories/movie-repositoty';
import { CreateMovie } from '../../../domain/usecases/movie/create/create-movie';
import { CreateMovieUseCase } from '../../../domain/usecases/movie/create/create-movie.usecase';
import { CreateMovieController } from '../../../infrastructure/http/controllers/movie/create-movie.controller';
import { HttpController } from '../../../infrastructure/protocols/http-controller';
import { LocalMovieRepository } from '../../../infrastructure/repositories/local-movie.repository';
import { createMovieUseCaseFactory } from '../usecases/create-movie-usecase.factory';

export const createMovieControllerFactory = (): HttpController => {
  return new CreateMovieController(createMovieUseCaseFactory());
};
