import { isError } from '../../../../core/errors/result';
import { CreateMovie } from '../../../../domain/usecases/movie/create/create-movie';
import { HttpResponse } from '../../../protocols/http';
import { HttpController } from '../../../protocols/http-controller';
import { created, failure, serverError } from '../../../protocols/http-utils';

type CreateMovieControllerRequest = {
  title: string;
  director: string;
  year: number;
};

export class CreateMovieController
  implements HttpController<CreateMovieControllerRequest>
{
  constructor(private readonly usecase: CreateMovie) {}

  async handle(request: CreateMovieControllerRequest): Promise<HttpResponse> {
    try {
      const { title, director, year } = request;
      const movieOrError = await this.usecase.execute({
        title,
        director,
        year,
      });

      if (isError(movieOrError)) {
        return failure(movieOrError);
      }
      return created(movieOrError);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
