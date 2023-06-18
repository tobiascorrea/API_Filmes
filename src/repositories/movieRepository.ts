import { Movie } from '../models/Movie';

export class MovieRepository {
  private movies: Movie[] = [];

  public create(movie: Movie): Movie {
    this.movies.push(movie);
    return movie;
  }

  public getAllMovies(): Movie[] {
    return this.movies;
  }
  
  public getMovieByTitle(title: string): Movie | undefined {
    return this.movies.find((movie) => movie.title === title);
  }
  
  public getById(id: string): Movie | undefined {
    return this.movies.find((movie) => movie.id === id);
  }

  public update(movie: Movie): Movie | undefined {
    const index = this.movies.findIndex((m) => m.id === movie.id);
    if (index !== -1) {
      this.movies[index] = movie;
      return movie;
    }
    return undefined;
  }

  public delete(id: string): boolean {
    const index = this.movies.findIndex((movie) => movie.id === id);
    if (index !== -1) {
      this.movies.splice(index, 1);
      return true;
    }
    return false;
  }
}
