import { isError } from '../../../../core/errors/result';
import { CreateMovie } from '../../../../domain/usecases/movie/create/create-movie';
import { DeleteMovie } from '../../../../domain/usecases/movie/delete/delete-movie';
import { HttpResponse } from '../../../protocols/http';
import { HttpController } from '../../../protocols/http-controller';
import { created, failure, ok, serverError } from '../../../protocols/http-utils';

type DeleteMovieControllerRequest = {
  movieId: string;
};

export class DeleteMovieController
  implements HttpController<DeleteMovieControllerRequest>
{
  constructor(private readonly usecase: DeleteMovie) {}

  async handle({ movieId }: DeleteMovieControllerRequest): Promise<HttpResponse> {
    try {
      const successOrError = await this.usecase.execute(movieId);
      if (isError(successOrError)) {
        return failure(successOrError);
      }
      return ok({ message: 'Filme deletado com sucesso' });
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
