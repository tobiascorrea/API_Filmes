import { Request, Response } from 'express';
import { MovieService } from '../services/movieService';

export class MovieController {
  private movieService: MovieService;

  constructor() {
    this.movieService = new MovieService();
  }

  public createMovie(req: Request, res: Response): void {
    const { title, director, year } = req.body;
    try {
      const movie = this.movieService.createMovie(title, director, year);
      res.status(201).json(movie);
    } catch (mensagem: any) {
      if (mensagem.message === 'Movie title already exists') {
        res.status(400).json({ mensagem: 'Movie title already exists' });
      } else {
        res.status(500).json({ mensagem: 'Internal server error' });
      }
    }
  }

  public getAllMovies(req: Request, res: Response): void {
    const movies = this.movieService.getAllMovies();
    res.json(movies);
  }

  public getMovie(req: Request, res: Response): void {
    const { id } = req.params;
    const movie = this.movieService.getMovie(id);
    if (!movie) {
      res.status(404).json({ mensagem: 'Movie not found' });
      return;
    }
    res.json(movie);
  }

  public updateMovie(req: Request, res: Response): void {
    const { id } = req.params;
    const { title, director, year } = req.body;
    const movie = this.movieService.updateMovie(id, title, director, year);
    if (!movie) {
      res.status(404).json({ mensagem: 'Movie not found' });
      return;
    }
    res.json(movie);
  }

  public deleteMovie(req: Request, res: Response): void {
    const { id } = req.params;
    const success = this.movieService.deleteMovie(id);
    if (!success) {
      res.status(404).json({ mensagem: 'Movie not found' });
      return;
    }
    res.status(204).send();
  }
}
