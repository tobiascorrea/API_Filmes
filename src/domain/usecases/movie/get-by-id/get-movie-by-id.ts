import { Type } from '../../../../core/errors/result';
import { Movie } from '../../../models/movie';

export interface GetMovieById {
  execute(movieId: String): Promise<Type<Movie>>;
}
