import { isError } from '../../../../core/errors/result';
import { CreateMovie } from '../../../../domain/usecases/movie/create/create-movie';
import { UpdateMovie } from '../../../../domain/usecases/movie/update/update-movie';
import { HttpResponse } from '../../../protocols/http';
import { HttpController } from '../../../protocols/http-controller';
import { created, failure, ok, serverError } from '../../../protocols/http-utils';

type UpdateMovieControllerRequest = {
  movieId: string;
  title: string;
  director: string;
  year: number;
};

export class UpdateMovieController
  implements HttpController<UpdateMovieControllerRequest>
{
  constructor(private readonly usecase: UpdateMovie) {}

  async handle(request: UpdateMovieControllerRequest): Promise<HttpResponse> {
    try {
      const { movieId, title, director, year } = request;
      const movieOrError = await this.usecase.execute(movieId, {
        title,
        director,
        year,
      });
      if (isError(movieOrError)) {
        return failure(movieOrError);
      }
      return ok(movieOrError);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
