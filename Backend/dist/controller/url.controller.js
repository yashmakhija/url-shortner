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
exports.deleteUrl = exports.updateUrl = exports.getUrl = exports.createUrl = void 0;
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
const updateUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shortName, comments } = req.body;
    const { urlId } = req.params;
    if (!shortName) {
        res.status(404).json({
            error: "Short name not found",
        });
        return;
    }
    try {
        const urlExist = yield prisma_1.prisma.url.findUnique({
            where: {
                id: urlId,
            },
        });
        if (!urlExist) {
            res.status(404).json({
                error: "url not found ",
            });
            return;
        }
        const updateUrl = yield prisma_1.prisma.url.updateMany({
            where: { id: urlExist.id },
            data: {
                shortName,
                comments: comments || null,
            },
        });
        res.status(200).json({
            updateUrl,
        });
        return;
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Getting error while updating the url",
        });
    }
});
exports.updateUrl = updateUrl;
const deleteUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { urlId } = req.body;
    if (!urlId) {
        res.status(404).json({
            error: "url not found",
        });
        return;
    }
    try {
        const deleteUrl = yield prisma_1.prisma.url.delete({
            where: {
                id: urlId,
            },
        });
        res.status(200).json({
            status: "Success",
            deleteUrl,
        });
        return;
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Getting issue while deleting the url",
        });
        return;
    }
});
exports.deleteUrl = deleteUrl;
