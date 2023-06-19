import { Type } from '../../../../core/errors/result';
import { Movie } from '../../../models/movie';
import { UpdateMovieDto } from './update-movie.dto';

export interface UpdateMovie {
  execute(movieId: string, dto: UpdateMovieDto): Promise<Type<Movie>>;
}
