"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_router_adapter_1 = require("../../adapters/express/express-router-adapter");
const create_movie_controller_factory_1 = require("../../../core/factories/controllers/create-movie-controller.factory");
const get_all_movie_controller_factory_1 = require("../../../core/factories/controllers/get-all-movie-controller.factory");
const get_movie_by_id_controller_factory_1 = require("../../../core/factories/controllers/get-movie-by-id-controller.factory");
const delete_movie_controller_factory_1 = require("../../../core/factories/controllers/delete-movie-controller.factory");
const update_movie_controller_factory_1 = require("../../../core/factories/controllers/update-movie-controller.factory");
exports.default = (router) => {
    router.post('/movie', (0, express_router_adapter_1.ExpressRouterAdapter)((0, create_movie_controller_factory_1.createMovieControllerFactory)()));
    router.get('/movies', (0, express_router_adapter_1.ExpressRouterAdapter)((0, get_all_movie_controller_factory_1.getAllMovieControllerFactory)()));
    router.get('/movie/:movieId', (0, express_router_adapter_1.ExpressRouterAdapter)((0, get_movie_by_id_controller_factory_1.getMovieByIdControllerFactory)()));
    router.delete('/movie/:movieId', (0, express_router_adapter_1.ExpressRouterAdapter)((0, delete_movie_controller_factory_1.deleteMovieControllerFactory)()));
    router.put('/movie/:movieId', (0, express_router_adapter_1.ExpressRouterAdapter)((0, update_movie_controller_factory_1.updateMovieControllerFactory)()));
};
//# sourceMappingURL=movie.router.js.map