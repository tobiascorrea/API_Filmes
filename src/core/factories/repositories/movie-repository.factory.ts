import { MovieRepository } from '../../../domain/repositories/movie-repositoty';
import { LocalMovieRepository } from '../../../infrastructure/repositories/local-movie.repository';

export const createMovieRepositoryFactory = (): MovieRepository => {
  return new LocalMovieRepository();
};
