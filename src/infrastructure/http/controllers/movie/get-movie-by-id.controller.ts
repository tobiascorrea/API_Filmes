import { isError } from '../../../../core/errors/result';
import { GetAllMovie } from '../../../../domain/usecases/movie/get-all/get-all-movie';
import { GetMovieById } from '../../../../domain/usecases/movie/get-by-id/get-movie-by-id';
import { HttpResponse } from '../../../protocols/http';
import { HttpController } from '../../../protocols/http-controller';
import { created, failure, ok, serverError } from '../../../protocols/http-utils';

type GetMovieByIdControllerRequest = {
  movieId: String;
};

export class GetMovieByIdController
  implements HttpController<GetMovieByIdControllerRequest>
{
  constructor(private readonly usecase: GetMovieById) {}

  async handle(request: GetMovieByIdControllerRequest): Promise<HttpResponse> {
    try {
      const movieOrError = await this.usecase.execute(request.movieId);
      if (isError(movieOrError)) {
        return failure(movieOrError);
      }
      return ok(movieOrError);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
