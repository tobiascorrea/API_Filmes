import { Type } from '../../../../core/errors/result';
import { Movie } from '../../../models/movie';

export interface GetAllMovie {
  execute(): Promise<Type<Movie[]>>;
}
