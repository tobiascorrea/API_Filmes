"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDatabase = void 0;
class LocalDatabase {
    constructor() {
        this.movies = [];
    }
    static getInstance() {
        if (!LocalDatabase.instance) {
            LocalDatabase.instance = new LocalDatabase();
        }
        return LocalDatabase.instance;
    }
    getMovie() {
        return this.movies;
    }
    getIndx(movieId) {
        return LocalDatabase.getInstance().movies.findIndex((m) => m.id === movieId);
    }
}
exports.LocalDatabase = LocalDatabase;
//# sourceMappingURL=local-database.js.map