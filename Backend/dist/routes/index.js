"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = exports.UrlRoutes = exports.authRoutes = void 0;
const auth_routes_1 = __importDefault(require("./auth.routes"));
exports.authRoutes = auth_routes_1.default;
const url_routes_1 = __importDefault(require("./url.routes"));
exports.UrlRoutes = url_routes_1.default;
const user_routes_1 = __importDefault(require("./user.routes"));
exports.UserRoutes = user_routes_1.default;
