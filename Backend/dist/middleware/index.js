"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = exports.requireAuth = void 0;
const auth_1 = require("./auth");
Object.defineProperty(exports, "requireAuth", { enumerable: true, get: function () { return auth_1.requireAuth; } });
const role_1 = require("./role");
Object.defineProperty(exports, "requireRole", { enumerable: true, get: function () { return role_1.requireRole; } });
