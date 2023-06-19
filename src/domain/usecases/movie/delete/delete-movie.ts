import { Type } from '../../../../core/errors/result';

export interface DeleteMovie {
  execute(movieId: string): Promise<Type<boolean>>;
}
