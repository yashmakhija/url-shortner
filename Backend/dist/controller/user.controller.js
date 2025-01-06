"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfile = void 0;
const prisma_1 = require("../config/prisma");
const userProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        res.status(404).json({
            error: "user not found",
        });
        return;
    }
    try {
        const userExist = yield prisma_1.prisma.user.findMany({
            select: {
                username: true,
                email: true,
                plan: true,
            },
            where: {
                id: user.id,
            },
        });
        if (!userExist) {
            res.status(404).json({
                error: "User not exist",
            });
            return;
        }
        res.status(200).json({
            userExist,
        });
        return;
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            error: "error while getting your profile",
        });
    }
});
exports.userProfile = userProfile;
