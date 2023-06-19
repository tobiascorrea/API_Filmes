import { Movie } from '../../../../domain/models/movie';

export class LocalDatabase {
  private movies: Movie[] = [];
  private static instance: LocalDatabase;

  private constructor() {}

  public static getInstance(): LocalDatabase {
    if (!LocalDatabase.instance) {
      LocalDatabase.instance = new LocalDatabase();
    }
    return LocalDatabase.instance;
  }

  public getMovie(): Movie[] {
    return this.movies;
  }

  public getIndx(movieId: string): number {
    return LocalDatabase.getInstance().movies.findIndex((m) => m.id === movieId);
  }
}
