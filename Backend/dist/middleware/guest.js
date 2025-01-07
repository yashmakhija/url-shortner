"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestMiddleware = void 0;
const uuid_1 = require("uuid");
const guestMiddleware = (req, res, next) => {
    let guestId = req.cookies.guestId;
    if (!guestId) {
        guestId = (0, uuid_1.v4)(); // Generate a unique identifier
        res.cookie("guestId", guestId, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
        }); // 30 days validity
    }
    req.guestId = guestId;
    next();
};
exports.guestMiddleware = guestMiddleware;
