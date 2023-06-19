"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressRouterAdapter = void 0;
const ExpressRouterAdapter = (controller) => {
    return async (req, res) => {
        const request = {
            ...(req.body || {}),
            ...(req.query || {}),
            ...(req.headers || {}),
            ...(req.params || {}),
        };
        const httpResponse = await controller.handle(request);
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            res.status(httpResponse.statusCode).json(httpResponse.body.error);
        }
    };
};
exports.ExpressRouterAdapter = ExpressRouterAdapter;
//# sourceMappingURL=express-router-adapter.js.map