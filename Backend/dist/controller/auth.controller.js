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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const prisma_1 = require("../config/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
require("dotenv").config();
const jwtSecret = process.env.jwtSecret || "babydoll";
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(404).json({
            error: "input not found",
        });
        return;
    }
    try {
        const user = yield prisma_1.prisma.user.findUnique({
            where: {
                username,
                email,
            },
        });
        if (user) {
            res.status(404).json({
                error: "User with this email or username already exist",
            });
            return;
        }
        if (typeof password !== "string" || password.length < 1) {
            res.status(400).json({ error: "Invalid password" });
            return;
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const createUser = yield prisma_1.prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        res.status(200).json({
            msg: "User Created Succesfully",
            id: createUser.id,
            username: createUser.username,
        });
    }
    catch (err) {
        console.error("Error while creating the account", err);
        res.status(500).json({
            error: "Something went wrong with signup",
        });
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(404).json({
            error: "Email password not found",
        });
        return;
    }
    try {
        const user = yield prisma_1.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            res.status(404).json({
                error: "user with this email doesn't exist",
            });
            return;
        }
        const hashedPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!hashedPassword) {
            res.status(401).json({
                error: "Wrong Password",
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            role: user.role,
        }, jwtSecret);
        res.status(200).json({
            msg: "User Login Succesfully",
            token: `Bearer ${token}`,
        });
    }
    catch (err) {
        console.error("Getting issue while login", err);
        res.status(500).json({
            error: "something went wrong with login",
        });
        return;
    }
});
exports.signIn = signIn;
