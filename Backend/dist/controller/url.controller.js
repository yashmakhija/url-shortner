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
exports.guestUrl = exports.redirectUrl = exports.deleteUrl = exports.updateUrl = exports.getUrl = exports.createUrl = void 0;
const prisma_1 = require("../config/prisma");
const baseUrl = process.env.baseUrl || "http://localhost:3901";
const createUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { destinationLink } = req.body;
    const user = req.user;
    if (!destinationLink || !destinationLink.startsWith("https://")) {
        res.status(404).json({
            error: "Make sure url starts with https://",
        });
        return;
    }
    let shortUrl = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
        shortUrl += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    try {
        const url = yield prisma_1.prisma.url.create({
            data: {
                destinationLink,
                userId: user.id,
                shortUrl,
            },
        });
        res.status(200).json({
            status: "Success",
            shortUrl: `${baseUrl}/api/url/${url.shortUrl}`,
        });
        return;
    }
    catch (err) {
        console.error("error while creating the url shortner", err);
        res.status(500).json({
            error: "error while creating the url",
        });
        return;
    }
});
exports.createUrl = createUrl;
const getUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    console.log(user.id);
    try {
        const userUrl = yield prisma_1.prisma.user.findMany({
            select: {
                username: true,
                role: true,
                plan: true,
                urls: true,
            },
            where: {
                id: user.id,
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
                shortUrl: urlId,
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
                shortUrl: urlId,
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
const redirectUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { urlId } = req.params;
    let clicks = 0;
    if (!urlId) {
        res.status(404).json({
            error: "url not found",
        });
        return;
    }
    try {
        const urlExist = yield prisma_1.prisma.url.update({
            where: {
                shortUrl: urlId,
            },
            data: {
                clicks: { increment: clicks },
            },
        });
        if (!urlExist) {
            res.status(404).json({
                error: "The requested URL does not exist.",
            });
            return;
        }
        const url = urlExist.destinationLink;
        res.status(308).redirect(url);
        return;
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            error: "error while redirecting the url",
        });
    }
});
exports.redirectUrl = redirectUrl;
const guestUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { destinationLink } = req.body;
    const guestId = req.guestId;
    if (!destinationLink) {
        res.status(404).json({
            error: "Please enter valid url",
        });
        return;
    }
    let shortUrl = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
        shortUrl += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    const expireAt = new Date(Date.now() + 3 * 60 * 60 * 1000);
    try {
        const createUrl = yield prisma_1.prisma.url.create({
            data: {
                destinationLink,
                shortUrl,
                guestId,
                expireAt,
            },
            select: {
                destinationLink: true,
                shortUrl: true,
                createdAt: true,
                clicks: true,
                expireAt: true,
            },
        });
        res.status(200).json({
            status: "Success",
            shortUrl: `${baseUrl}/api/url/${createUrl.shortUrl}`,
            createUrl,
        });
        return;
    }
    catch (err) {
        console.error("Something went wrong while create url", err);
        return;
    }
});
exports.guestUrl = guestUrl;
