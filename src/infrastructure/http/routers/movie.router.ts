import { Router } from 'express';
import { ExpressRouterAdapter } from '../../adapters/express/express-router-adapter';
import { createMovieControllerFactory } from '../../../core/factories/controllers/create-movie-controller.factory';
import { getAllMovieControllerFactory } from '../../../core/factories/controllers/get-all-movie-controller.factory';
import { getMovieByIdControllerFactory } from '../../../core/factories/controllers/get-movie-by-id-controller.factory';
import { deleteMovieControllerFactory } from '../../../core/factories/controllers/delete-movie-controller.factory';
import { updateMovieControllerFactory } from '../../../core/factories/controllers/update-movie-controller.factory';

export default (router: Router): void => {
  router.post('/movie', ExpressRouterAdapter(createMovieControllerFactory()));
  router.get('/movies', ExpressRouterAdapter(getAllMovieControllerFactory()));
  router.get('/movie/:movieId', ExpressRouterAdapter(getMovieByIdControllerFactory()));
  router.delete('/movie/:movieId', ExpressRouterAdapter(deleteMovieControllerFactory()));
  router.put('/movie/:movieId', ExpressRouterAdapter(updateMovieControllerFactory()));
};
