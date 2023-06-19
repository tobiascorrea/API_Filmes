import { v4 as uuidv4 } from 'uuid';
import { Type } from '../../core/errors/result';
import { Movie } from '../../domain/models/movie';
import { MovieRepository, MovieResult } from '../../domain/repositories/movie-repositoty';
import { CreateMovieDto } from '../../domain/usecases/movie/create/create-movie.dto';
import { LocalDatabase } from '../adapters/database/local/local-database';
import { UpdateMovieDto } from '../../domain/usecases/movie/update/update-movie.dto';
import { MovieNotFoundError } from '../../domain/errors/movie-not-found.error';

export class LocalMovieRepository implements MovieRepository {
  async create(dto: CreateMovieDto): Promise<Type<Movie>> {
    const movie = { ...dto, id: uuidv4() };
    LocalDatabase.getInstance().getMovie().push(movie);
    return movie;
  }

  async getById(movieId: String): Promise<MovieResult> {
    return LocalDatabase.getInstance()
      .getMovie()
      .find((m) => m.id === movieId);
  }

  async getByTitle(title: String): Promise<MovieResult> {
    return LocalDatabase.getInstance()
      .getMovie()
      .find((m) => m.title === title);
  }

  async getAll(): Promise<Movie[]> {
    return LocalDatabase.getInstance().getMovie();
  }

  async delete(movieId: string): Promise<void> {
    const index = LocalDatabase.getInstance()
      .getMovie()
      .findIndex((movie) => movie.id === movieId);
    if (index !== -1) {
      LocalDatabase.getInstance().getMovie().splice(index, 1);
    }
  }

  async update(movieId: string, dto: UpdateMovieDto): Promise<MovieResult> {
    const index = LocalDatabase.getInstance().getIndx(movieId);
    if (index !== -1) {
      const newMovie = { ...dto, id: movieId };
      LocalDatabase.getInstance().getMovie()[index] = newMovie;
      return newMovie;
    }
    return Promise.resolve(undefined);
  }
}
