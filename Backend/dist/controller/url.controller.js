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
exports.getUrl = exports.createUrl = void 0;
const prisma_1 = require("../config/prisma");
const createUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { destinationLink } = req.body;
    const user = req.user;
    if (!destinationLink) {
        res.status(404).json({
            error: "Destination url not found",
        });
        return;
    }
    try {
        const url = yield prisma_1.prisma.url.create({
            data: {
                destinationLink,
                userId: user.id,
            },
        });
        res.status(200).json({
            status: "Success",
            url,
        });
        return;
    }
    catch (err) {
        console.error("error while creatign the url shortner", err);
        res.status(500).json({
            error: "error while creating the url",
        });
        return;
    }
});
exports.createUrl = createUrl;
const getUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    try {
        const userUrl = yield prisma_1.prisma.user.findMany({
            where: {
                id: user.id,
            },
            include: {
                urls: true,
            },
        });
        res.status(200).json({
            status: "Success",
            userUrl,
        });
        return;
    }
    catch (err) {
        console.error("error while getting the url", err);
        res.status(500).json({
            error: "erorr while getting the url",
        });
        return;
    }
});
exports.getUrl = getUrl;
