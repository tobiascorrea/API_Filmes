"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalMovieRepository = void 0;
const uuid_1 = require("uuid");
const local_database_1 = require("../adapters/database/local/local-database");
class LocalMovieRepository {
    async create(dto) {
        const movie = { ...dto, id: (0, uuid_1.v4)() };
        local_database_1.LocalDatabase.getInstance().getMovie().push(movie);
        return movie;
    }
    async getById(movieId) {
        return local_database_1.LocalDatabase.getInstance()
            .getMovie()
            .find((m) => m.id === movieId);
    }
    async getByTitle(title) {
        return local_database_1.LocalDatabase.getInstance()
            .getMovie()
            .find((m) => m.title === title);
    }
    async getAll() {
        return local_database_1.LocalDatabase.getInstance().getMovie();
    }
    async delete(movieId) {
        const index = local_database_1.LocalDatabase.getInstance()
            .getMovie()
            .findIndex((movie) => movie.id === movieId);
        if (index !== -1) {
            local_database_1.LocalDatabase.getInstance().getMovie().splice(index, 1);
        }
    }
    async update(movieId, dto) {
        const index = local_database_1.LocalDatabase.getInstance().getIndx(movieId);
        if (index !== -1) {
            const newMovie = { ...dto, id: movieId };
            local_database_1.LocalDatabase.getInstance().getMovie()[index] = newMovie;
            return newMovie;
        }
        return Promise.resolve(undefined);
    }
}
exports.LocalMovieRepository = LocalMovieRepository;
//# sourceMappingURL=local-movie.repository.js.map