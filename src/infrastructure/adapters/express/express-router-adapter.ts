import { Request, Response } from 'express';
import { HttpController } from '../../protocols/http-controller';
import { HttpRequest } from '../../protocols/http';

export const ExpressRouterAdapter = (controller: HttpController): any => {
  return async (req: Request, res: Response) => {
    const request: HttpRequest = {
      ...(req.body || {}),
      ...(req.query || {}),
      ...(req.headers || {}),
      ...(req.params || {}),
    };

    const httpResponse = await controller.handle(request);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json(httpResponse.body.error);
    }
  };
};
