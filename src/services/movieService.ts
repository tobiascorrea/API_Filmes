import { v4 as uuidv4 } from 'uuid';
import { Movie } from '../models/Movie';
import { MovieRepository } from '../repositories/movieRepository';

export class MovieService {
  private movieRepository: MovieRepository;

  constructor() {
    this.movieRepository = new MovieRepository();
  }

  public createMovie(title: string, director: string, year: number): Movie {
    if (this.isMovieTitleTaken(title)) {
      throw new Error('Movie title already exists');
    }
    const movie: Movie = {
      id: uuidv4(),
      title,
      director,
      year,
    };
    return this.movieRepository.create(movie);
  }

  private isMovieTitleTaken(title: string): boolean {
    const existingMovie = this.movieRepository.getMovieByTitle(title);
    return !!existingMovie;
  }

  public getAllMovies(): Movie[] {
    return this.movieRepository.getAllMovies();
  }

  public getMovie(id: string): Movie | undefined {
    return this.movieRepository.getById(id);
  }

  public updateMovie(id: string, title: string, director: string, year: number): Movie | undefined {
    const movie: Movie = {
      id,
      title,
      director,
      year,
    };
    return this.movieRepository.update(movie);
  }

  public deleteMovie(id: string): boolean {
    return this.movieRepository.delete(id);
  }
}
