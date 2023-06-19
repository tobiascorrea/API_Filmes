import { HttpResponse } from './http';

export interface HttpController<T = any> {
  handle(request: T): Promise<HttpResponse>;
}
