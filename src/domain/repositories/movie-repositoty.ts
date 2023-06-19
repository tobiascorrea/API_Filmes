import { Type } from '../../core/errors/result';
import { Movie } from '../models/movie';
import { CreateMovieDto } from '../usecases/movie/create/create-movie.dto';
import { UpdateMovieDto } from '../usecases/movie/update/update-movie.dto';

export type MovieResult = Movie | undefined;

export interface MovieRepository {
  create(dto: CreateMovieDto): Promise<Type<Movie>>;
  update(movieId: string, dto: UpdateMovieDto): Promise<MovieResult>;
  getById(movieId: String): Promise<MovieResult>;
  getByTitle(title: String): Promise<MovieResult>;
  getAll(): Promise<Movie[]>;
  delete(movieId: string): Promise<void>;
}
