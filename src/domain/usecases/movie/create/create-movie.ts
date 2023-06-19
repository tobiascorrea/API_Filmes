import { CreateMovieDto } from './create-movie.dto';
import * as Result from '../../../../core/errors/result';
import { Movie } from '../../../models/movie';

export interface CreateMovie {
  execute(dto: CreateMovieDto): Promise<Result.Type<Movie>>;
}
