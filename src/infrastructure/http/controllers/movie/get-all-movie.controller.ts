import { isError } from '../../../../core/errors/result';
import { GetAllMovie } from '../../../../domain/usecases/movie/get-all/get-all-movie';
import { HttpResponse } from '../../../protocols/http';
import { HttpController } from '../../../protocols/http-controller';
import { created, failure, ok, serverError } from '../../../protocols/http-utils';

export class GetAllMovieController implements HttpController {
  constructor(private readonly usecase: GetAllMovie) {}

  async handle(): Promise<HttpResponse> {
    try {
      const moviesOrError = await this.usecase.execute();
      if (isError(moviesOrError)) {
        return failure(moviesOrError);
      }
      return ok(moviesOrError);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
